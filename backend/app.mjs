import express from "express";
import { randomBytes, createHash, timingSafeEqual } from "node:crypto";
import { confirmPayment } from "./paystack.mjs";

class ClientError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}
const text = (value, label, { min = 0, max = 200 } = {}) => {
  if (
    typeof value !== "string" ||
    value.trim().length < min ||
    value.trim().length > max
  )
    throw new ClientError(400, `${label} must be ${min}-${max} characters.`);
  return value.trim();
};
const email = (value) => {
  const result = text(value, "Email", { min: 3, max: 254 }).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result))
    throw new ClientError(400, "Please enter a valid email address.");
  return result;
};
const optional = (value, label, max = 200) =>
  value === undefined || value === "" ? "" : text(value, label, { max });
const referenceIsValid = (value) =>
  typeof value === "string" && /^fodady_[a-f\d]{32}$/.test(value);
const secureEqual = (a, b) => {
  const x = createHash("sha256").update(a).digest(),
    y = createHash("sha256").update(b).digest();
  return timingSafeEqual(x, y);
};
function rateLimit(max, windowMs = 60000) {
  const buckets = new Map();
  let calls = 0;
  return (req, res, next) => {
    const now = Date.now(),
      key = req.ip;
    if (++calls % 100 === 0)
      for (const [k, v] of buckets) if (v.until <= now) buckets.delete(k);
    let slot = buckets.get(key);
    if (!slot || slot.until <= now) {
      slot = { count: 0, until: now + windowMs };
      buckets.set(key, slot);
    }
    if (++slot.count > max) {
      res.set("Retry-After", String(Math.ceil((slot.until - now) / 1000)));
      return res
        .status(429)
        .json({ error: "Too many attempts. Please try again shortly." });
    }
    next();
  };
}
export function createApp({
  store,
  paystack,
  adminToken = "",
  publicOrigin = "http://127.0.0.1:5174",
  allowedOrigins = [publicOrigin],
  trustProxy = false,
  limits = true,
}) {
  const app = express();
  app.disable("x-powered-by");
  if (trustProxy) app.set("trust proxy", 1);
  app.use((req, res, next) => {
    res.set({
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Frame-Options": "SAMEORIGIN",
    });
    if (req.path.startsWith("/api/")) res.set("Cache-Control", "no-store");
    next();
  });
  const auth = (req, res, next) => {
    if (adminToken.length < 32)
      return res
        .status(503)
        .json({
          error:
            "Administration is not configured. Set ADMIN_TOKEN on the server.",
        });
    const token = req.get("authorization")?.match(/^Bearer (.+)$/)?.[1] || "";
    if (!secureEqual(token, adminToken))
      return res
        .status(401)
        .json({ error: "Invalid administrator access key." });
    next();
  };
  const limit = (max) =>
    limits ? rateLimit(max) : (_req, _res, next) => next();
  app.post(
    "/api/payments/webhook",
    limit(200),
    express.raw({ type: "application/json", limit: "128kb" }),
    async (req, res) => {
      if (!paystack.configured)
        return res.status(503).json({ error: "Payments are not configured." });
      if (
        !Buffer.isBuffer(req.body) ||
        !paystack.signature(req.body, req.get("x-paystack-signature"))
      )
        return res.status(401).json({ error: "Invalid webhook signature." });
      let event;
      try {
        event = JSON.parse(req.body.toString("utf8"));
      } catch {
        return res.status(400).json({ error: "Invalid JSON." });
      }
      if (
        event.event === "charge.success" &&
        referenceIsValid(event.data?.reference)
      ) {
        try {
          await confirmPayment(store, paystack, event.data.reference);
        } catch {
          return res
            .status(502)
            .json({
              error: "Payment verification unavailable. Retry this event.",
            });
        }
      }
      res.sendStatus(200);
    },
  );
  app.use("/api", express.json({ limit: "32kb" }));
  app.use("/api", (req, res, next) => {
    if (
      ["POST", "PUT", "PATCH", "DELETE"].includes(req.method) &&
      req.get("origin") &&
      !allowedOrigins.includes(req.get("origin"))
    )
      return res
        .status(403)
        .json({ error: "This request origin is not allowed." });
    next();
  });
  app.get("/api/health", async (_req, res) => res.json({ status: "ok" }));
  app.post("/api/contact", limit(10), async (req, res) => {
    const body = req.body || {};
    if (body.website)
      return res
        .status(400)
        .json({ error: "Unable to accept this submission." });
    const data = {
      name: text(body.name, "Name", { min: 2, max: 120 }),
      email: email(body.email),
      subject: text(body.subject, "Subject", { min: 2, max: 200 }),
      message: text(body.message, "Message", { min: 10, max: 10000 }),
    };
    const result = await store.saveSubmission("contact", data);
    res.status(201).json({ ok: true, id: result.id });
  });
  app.post("/api/volunteer", limit(8), async (req, res) => {
    const body = req.body || {};
    if (body.website)
      throw new ClientError(400, "Unable to accept this submission.");
    const data = {
      firstName: text(body.firstName, "First name", { min: 1, max: 80 }),
      lastName: text(body.lastName, "Last name", { min: 1, max: 80 }),
      email: email(body.email),
      phone: optional(body.phone, "Phone", 40),
      areaOfInterest: text(body.areaOfInterest, "Area of interest", {
        min: 2,
        max: 200,
      }),
      message: optional(body.message, "Message", 10000),
    };
    const result = await store.saveSubmission("volunteer", data);
    res.status(201).json({ ok: true, id: result.id });
  });
  app.post("/api/newsletter", limit(10), async (req, res) => {
    const body = req.body || {};
    if (body.website)
      throw new ClientError(400, "Unable to accept this submission.");
    await store.saveSubmission("newsletter", { email: email(body.email) });
    // A uniform response avoids disclosing whether an email address is already stored.
    res
      .status(201)
      .json({ ok: true, message: "Your subscription has been recorded." });
  });
  app.get("/api/payments/config", (_req, res) =>
    res.json({
      configured: paystack.configured,
      mode: paystack.mode,
      currency: "NGN",
    }),
  );
  app.post("/api/payments/initialize", limit(12), async (req, res) => {
    if (!paystack.configured)
      throw new ClientError(
        503,
        "Online payments are not configured yet. Please use the bank transfer details below.",
      );
    const body = req.body || {};
    if (
      typeof body.amount !== "number" ||
      !Number.isFinite(body.amount) ||
      Math.abs(Math.round(body.amount * 100) - body.amount * 100) > 0.000001 ||
      body.amount < 100 ||
      body.amount > 10000000
    )
      throw new ClientError(
        400,
        "Enter a donation between ₦100 and ₦10,000,000, with no more than two decimal places.",
      );
    const data = {
      amount: Math.round(body.amount * 100),
      email: email(body.email),
      name: optional(body.name, "Name", 120),
      phone: optional(body.phone, "Phone", 40),
      purpose: body.purpose === "operations" ? "operations" : "projects",
    };
    const key = text(req.get("idempotency-key"), "Request key", {
      min: 16,
      max: 100,
    });
    if (!/^[a-zA-Z\d_-]+$/.test(key))
      throw new ClientError(400, "Invalid request key.");
    const fingerprint = createHash("sha256")
      .update(JSON.stringify(data))
      .digest("hex");
    let existing = await store.donationByKey(key);
    if (!existing) {
      const reference = "fodady_" + randomBytes(16).toString("hex");
      try {
        existing = await store.createDonation({
          ...data,
          reference,
          key,
          fingerprint,
        });
      } catch (error) {
        existing = await store.donationByKey(key);
        if (!existing) throw error;
      }
      if (existing.reference === reference) {
        try {
          const result = await paystack.initialize({
            email: data.email,
            amount: data.amount,
            currency: "NGN",
            reference,
            callback_url: publicOrigin + "/donate",
            metadata: {
              name: data.name,
              phone: data.phone,
              purpose: data.purpose,
            },
          });
          await store.initialized(reference, result.authorizationUrl);
          return res
            .status(201)
            .json({ reference, authorizationUrl: result.authorizationUrl });
        } catch {
          await store.initializationFailed(reference);
          throw new ClientError(
            502,
            "Unable to start secure checkout. Please try again or use bank transfer.",
          );
        }
      }
    }
    if (existing.fingerprint !== fingerprint)
      throw new ClientError(
        409,
        "This request key was used for different donation details.",
      );
    if (existing.status === "success")
      throw new ClientError(409, "This donation has already been paid.");
    if (existing.authorization_url)
      return res.json({
        reference: existing.reference,
        authorizationUrl: existing.authorization_url,
      });
    throw new ClientError(
      409,
      existing.status === "initialization_failed"
        ? "Checkout could not be created. Please start a new donation attempt."
        : "Checkout is being prepared. Please try again shortly.",
    );
  });
  app.get("/api/payments/verify", limit(30), async (req, res) => {
    if (!referenceIsValid(req.query.reference))
      throw new ClientError(400, "Invalid payment reference.");
    if (!paystack.configured)
      throw new ClientError(503, "Online payments are not configured.");
    let result;
    try {
      result = await confirmPayment(store, paystack, req.query.reference);
    } catch {
      throw new ClientError(
        502,
        "We could not confirm this payment. Please retry verification.",
      );
    }
    if (!result) throw new ClientError(404, "Payment reference not found.");
    res.json(result);
  });
  app.post("/api/admin/session", limit(5), auth, (_req, res) =>
    res.json({ ok: true }),
  );
  app.use("/api/admin", limit(120), auth);
  for (const [path, kind] of [
    ["contacts", "contact"],
    ["volunteers", "volunteer"],
    ["newsletters", "newsletter"],
  ])
    app.get("/api/admin/" + path, async (_req, res) =>
      res.json(await store.submissions(kind)),
    );
  app.get("/api/admin/donations", async (_req, res) =>
    res.json(await store.donations()),
  );
  app.use("/api", (_req, res) =>
    res.status(404).json({ error: "API endpoint not found." }),
  );
  app.use((error, req, res, next) => {
    if (!req.path.startsWith("/api")) return next(error);
    if (error.type === "entity.too.large")
      return res.status(413).json({ error: "Submission is too large." });
    if (error instanceof SyntaxError)
      return res.status(400).json({ error: "Invalid JSON." });
    const status = error instanceof ClientError ? error.status : 500;
    if (status === 500)
      console.error("API request failed", {
        path: req.path,
        code: error.code || "INTERNAL_ERROR",
      });
    res
      .status(status)
      .json({
        error:
          status === 500
            ? "Unable to process this request. Please try again."
            : error.message,
      });
  });
  return app;
}
