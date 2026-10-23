import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { once } from "node:events";
import { createHmac } from "node:crypto";
import { openStore } from "./store.mjs";
import { createApp } from "./app.mjs";
import { createPaystack } from "./paystack.mjs";
const token = "test-administrator-key-which-is-long-and-random";
const secret = "sk_test_fixture_only_not_a_real_key";
async function fixture(
  t,
  { configured = true, limits = false, adminToken = token } = {},
) {
  const dir = await mkdtemp(join(tmpdir(), "fodady-api-"));
  const sqlitePath = join(dir, "test.sqlite");
  const store = await openStore({ sqlitePath });
  const payments = new Map();
  let initializeCalls = 0,
    verifyCalls = 0;
  const transport = async (url, options) => {
    assert.equal(options.headers.Authorization, "Bearer " + secret);
    if (url.endsWith("/initialize")) {
      initializeCalls++;
      const body = JSON.parse(options.body);
      payments.set(body.reference, {
        ...body,
        id: 1001,
        status: "success",
        paid_at: new Date().toISOString(),
        customer: { email: body.email },
      });
      return Response.json({
        status: true,
        data: {
          reference: body.reference,
          authorization_url: "https://checkout.paystack.com/test-session",
        },
      });
    }
    verifyCalls++;
    const reference = decodeURIComponent(url.split("/").at(-1));
    return Response.json({ status: true, data: payments.get(reference) });
  };
  const paystack = createPaystack(configured ? secret : "", transport);
  const app = createApp({
    store,
    paystack,
    adminToken,
    publicOrigin: "https://example.org",
    limits,
  });
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  const base = "http://127.0.0.1:" + server.address().port;
  t.after(async () => {
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
    await store.close();
    await rm(dir, { recursive: true, force: true });
  });
  const request = async (
    path,
    { body, method = body ? "POST" : "GET", headers = {}, raw } = {},
  ) => {
    const response = await fetch(base + path, {
      method,
      headers: {
        ...(body || raw ? { "Content-Type": "application/json" } : {}),
        ...headers,
      },
      ...(body ? { body: JSON.stringify(body) } : raw ? { body: raw } : {}),
    });
    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
    return { status: response.status, data, headers: response.headers };
  };
  const initialize = (
    body = { amount: 5000, email: "donor@example.org" },
    key = "unique_payment_request_1234",
  ) =>
    request("/api/payments/initialize", {
      body,
      headers: { "Idempotency-Key": key },
    });
  return {
    store,
    request,
    initialize,
    payments,
    paystack,
    sqlitePath,
    get initializeCalls() {
      return initializeCalls;
    },
    get verifyCalls() {
      return verifyCalls;
    },
  };
}
test("contact and volunteer submissions persist, including across a database reopen", async (t) => {
  const f = await fixture(t);
  assert.equal(
    (
      await f.request("/api/contact", {
        body: {
          name: "Preview Person",
          email: "Preview@Example.org",
          subject: "Partnership enquiry",
          message: "We would like to support a community library.",
        },
      })
    ).status,
    201,
  );
  assert.equal(
    (
      await f.request("/api/volunteer", {
        body: {
          firstName: "Preview",
          lastName: "Person",
          email: "volunteer@example.org",
          phone: "+2340000000000",
          areaOfInterest: "Community libraries",
          message: "I can help with reading sessions.",
        },
      })
    ).status,
    201,
  );
  const reopened = await openStore({ sqlitePath: f.sqlitePath });
  const contacts = await reopened.submissions("contact");
  assert.equal(contacts[0].email, "preview@example.org");
  assert.equal(
    (await reopened.submissions("volunteer"))[0].firstName,
    "Preview",
  );
  await reopened.close();
});
test("validation rejects malformed emails, short messages, invalid JSON, and oversized payloads", async (t) => {
  const f = await fixture(t);
  assert.equal(
    (
      await f.request("/api/contact", {
        body: { name: "P", email: "bad", subject: "Hi", message: "Hi" },
      })
    ).status,
    400,
  );
  assert.equal(
    (await f.request("/api/newsletter", { body: { email: "not-an-email" } }))
      .status,
    400,
  );
  assert.equal(
    (await f.request("/api/contact", { method: "POST", raw: "{broken json" }))
      .status,
    400,
  );
  assert.equal(
    (await f.request("/api/contact", { body: { message: "x".repeat(40000) } }))
      .status,
    413,
  );
  assert.equal((await f.store.submissions("contact")).length, 0);
});
test("newsletter signup normalizes and deduplicates without exposing existing addresses", async (t) => {
  const f = await fixture(t);
  const a = await f.request("/api/newsletter", {
      body: { email: "Reader@Example.org" },
    }),
    b = await f.request("/api/newsletter", {
      body: { email: "reader@example.org" },
    });
  assert.equal(a.status, 201);
  assert.deepEqual(a.data, b.data);
  assert.equal((await f.store.submissions("newsletter")).length, 1);
});
test("admin records require the correct key and missing configuration fails closed", async (t) => {
  const f = await fixture(t);
  assert.equal((await f.request("/api/admin/contacts")).status, 401);
  assert.equal(
    (
      await f.request("/api/admin/contacts", {
        headers: { Authorization: "Bearer wrong" },
      })
    ).status,
    401,
  );
  assert.equal(
    (
      await f.request("/api/admin/session", {
        method: "POST",
        headers: { Authorization: "Bearer " + token },
      })
    ).status,
    200,
  );
  const result = await f.request("/api/admin/donations", {
    headers: { Authorization: "Bearer " + token },
  });
  assert.equal(result.status, 200);
  assert.deepEqual(result.data, []);
  assert.equal(result.headers.get("cache-control"), "no-store");
  const unconfigured = await fixture(t, { adminToken: "" });
  assert.equal((await unconfigured.request("/api/admin/contacts")).status, 503);
});
test("foreign origins cannot submit forms and form rate limits apply", async (t) => {
  const f = await fixture(t, { limits: true });
  assert.equal(
    (
      await f.request("/api/newsletter", {
        body: { email: "person@example.org" },
        headers: { Origin: "https://untrusted.example" },
      })
    ).status,
    403,
  );
  for (let i = 0; i < 10; i++)
    assert.equal(
      (
        await f.request("/api/newsletter", {
          body: { email: "reader" + i + "@example.org" },
        })
      ).status,
      201,
    );
  const blocked = await f.request("/api/newsletter", {
    body: { email: "extra@example.org" },
  });
  assert.equal(blocked.status, 429);
  assert.ok(blocked.headers.get("retry-after"));
});
test("missing Paystack credentials do not create a payment or leak a secret", async (t) => {
  const f = await fixture(t, { configured: false });
  const config = await f.request("/api/payments/config");
  assert.deepEqual(config.data, {
    configured: false,
    mode: "unconfigured",
    currency: "NGN",
  });
  assert.equal((await f.initialize()).status, 503);
  assert.equal(f.initializeCalls, 0);
  assert.equal((await f.store.donations()).length, 0);
});
test("initialization converts naira to kobo and returns only a hosted checkout reference", async (t) => {
  const f = await fixture(t);
  const result = await f.initialize({
    amount: 100.11,
    email: "Donor@Example.org",
    name: "Preview Donor",
    purpose: "operations",
  });
  assert.equal(result.status, 201);
  assert.match(result.data.reference, /^fodady_[a-f\d]{32}$/);
  assert.equal(
    result.data.authorizationUrl,
    "https://checkout.paystack.com/test-session",
  );
  const saved = await f.store.donation(result.data.reference);
  assert.equal(saved.amount, 10011);
  assert.equal(saved.email, "donor@example.org");
  assert.equal(saved.purpose, "operations");
  assert.equal(saved.status, "pending");
  assert.equal(JSON.stringify(result.data).includes(secret), false);
});
test("invalid amounts are rejected before contacting Paystack", async (t) => {
  const f = await fixture(t);
  for (const amount of [0, -100, 99.99, 100.111, 10000001, "5000", true])
    assert.equal(
      (await f.initialize({ amount, email: "donor@example.org" })).status,
      400,
    );
  assert.equal(f.initializeCalls, 0);
});
test("idempotency prevents duplicate initialization and rejects changed payment details", async (t) => {
  const f = await fixture(t);
  const first = await f.initialize(),
    second = await f.initialize();
  assert.equal(first.status, 201);
  assert.equal(second.status, 200);
  assert.deepEqual(second.data, first.data);
  assert.equal(f.initializeCalls, 1);
  assert.equal(
    (await f.initialize({ amount: 6000, email: "donor@example.org" })).status,
    409,
  );
  assert.equal((await f.store.donations()).length, 1);
});
test("concurrent duplicate checkout requests initialize at most one payment", async (t) => {
  const f = await fixture(t);
  const results = await Promise.all([f.initialize(), f.initialize()]);
  assert.ok(results.some((r) => r.status === 201));
  assert.ok(results.every((r) => [200, 201, 409].includes(r.status)));
  assert.equal(f.initializeCalls, 1);
});
test("server verification confirms matching amount, reference, currency, and donor", async (t) => {
  const f = await fixture(t);
  const { data } = await f.initialize();
  const verify = await f.request(
    "/api/payments/verify?reference=" + data.reference,
  );
  assert.equal(verify.status, 200);
  assert.equal(verify.data.status, "success");
  assert.equal((await f.store.donation(data.reference)).status, "success");
  assert.equal("email" in verify.data, false);
  await f.request("/api/payments/verify?reference=" + data.reference);
  assert.equal(f.verifyCalls, 1);
});
test("payment amount, currency, reference and email mismatches cannot mark donations paid", async (t) => {
  const f = await fixture(t);
  for (const [field, value] of [
    ["amount", 1],
    ["currency", "USD"],
    ["reference", "wrong"],
    ["customer", { email: "other@example.org" }],
  ]) {
    const { data } = await f.initialize(
      { amount: 5000, email: "donor@example.org" },
      "payment_mismatch_" + field,
    );
    f.payments.get(data.reference)[field] = value;
    assert.equal(
      (await f.request("/api/payments/verify?reference=" + data.reference))
        .status,
      502,
    );
    assert.equal((await f.store.donation(data.reference)).status, "pending");
  }
});
test("pending and failed provider transactions do not count as paid", async (t) => {
  const f = await fixture(t);
  for (const status of ["pending", "failed", "abandoned"]) {
    const { data } = await f.initialize(
      { amount: 5000, email: "donor@example.org" },
      "payment_state_" + status,
    );
    f.payments.get(data.reference).status = status;
    const result = await f.request(
      "/api/payments/verify?reference=" + data.reference,
    );
    assert.equal(result.data.status, status);
    assert.equal((await f.store.donation(data.reference)).status, status);
  }
});
test("forged and modified webhook payloads are rejected", async (t) => {
  const f = await fixture(t);
  const { data } = await f.initialize();
  const raw = JSON.stringify({
    event: "charge.success",
    data: { reference: data.reference },
  });
  const signature = createHmac("sha512", secret).update(raw).digest("hex");
  assert.equal(
    (
      await f.request("/api/payments/webhook", {
        method: "POST",
        raw,
        headers: { "x-paystack-signature": "fake" },
      })
    ).status,
    401,
  );
  assert.equal(
    (
      await f.request("/api/payments/webhook", {
        method: "POST",
        raw: raw + " ",
        headers: { "x-paystack-signature": signature },
      })
    ).status,
    401,
  );
  assert.equal((await f.store.donation(data.reference)).status, "pending");
});
test("valid webhook verifies with Paystack and repeated events are idempotent", async (t) => {
  const f = await fixture(t);
  const { data } = await f.initialize();
  const raw = JSON.stringify({
      event: "charge.success",
      data: { reference: data.reference },
    }),
    headers = {
      "x-paystack-signature": createHmac("sha512", secret)
        .update(raw)
        .digest("hex"),
    };
  assert.equal(
    (await f.request("/api/payments/webhook", { method: "POST", raw, headers }))
      .status,
    200,
  );
  assert.equal(
    (await f.request("/api/payments/webhook", { method: "POST", raw, headers }))
      .status,
    200,
  );
  assert.equal((await f.store.donation(data.reference)).status, "success");
  assert.equal(f.verifyCalls, 1);
  assert.equal((await f.store.donations()).length, 1);
});
test("unknown references and API routes return controlled errors", async (t) => {
  const f = await fixture(t);
  assert.equal(
    (await f.request("/api/payments/verify?reference=../../secret")).status,
    400,
  );
  assert.equal(
    (await f.request("/api/payments/verify?reference=fodady_" + "0".repeat(32)))
      .status,
    404,
  );
  assert.equal((await f.request("/api/not-found")).status, 404);
});
test("provider initialization failures are recorded without marking a donation paid", async (t) => {
  const f = await fixture(t);
  f.paystack.initialize = async () => {
    throw new Error("provider offline");
  };
  assert.equal((await f.initialize()).status, 502);
  assert.equal((await f.store.donations())[0].status, "initialization_failed");
  assert.equal((await f.initialize()).status, 409);
});
test("verification outages leave payments unpaid and signed webhooks retry successfully", async (t) => {
  const f = await fixture(t),
    { data } = await f.initialize();
  const verify = f.paystack.verify;
  f.paystack.verify = async () => {
    throw new Error("network unavailable");
  };
  assert.equal(
    (await f.request("/api/payments/verify?reference=" + data.reference))
      .status,
    502,
  );
  const raw = JSON.stringify({
      event: "charge.success",
      data: { reference: data.reference },
    }),
    headers = {
      "x-paystack-signature": createHmac("sha512", secret)
        .update(raw)
        .digest("hex"),
    };
  assert.equal(
    (await f.request("/api/payments/webhook", { method: "POST", raw, headers }))
      .status,
    502,
  );
  assert.equal((await f.store.donation(data.reference)).status, "pending");
  f.paystack.verify = verify;
  assert.equal(
    (await f.request("/api/payments/webhook", { method: "POST", raw, headers }))
      .status,
    200,
  );
  assert.equal((await f.store.donation(data.reference)).status, "success");
});
test("checkout redirects are restricted to the Paystack HTTPS host", async () => {
  for (const url of [
    "https://untrusted.example/pay",
    "http://checkout.paystack.com/pay",
  ]) {
    const client = createPaystack(secret, async () =>
      Response.json({
        status: true,
        data: { reference: "reference", authorization_url: url },
      }),
    );
    await assert.rejects(
      () => client.initialize({ reference: "reference" }),
      /PAYSTACK_INVALID_RESPONSE/,
    );
  }
});
