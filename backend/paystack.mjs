import { createHmac, timingSafeEqual } from "node:crypto";
export function validSignature(raw, signature, secret) {
  if (!secret || !/^[a-f\d]{128}$/i.test(signature || "")) return false;
  return timingSafeEqual(
    Buffer.from(signature, "hex"),
    createHmac("sha512", secret).update(raw).digest(),
  );
}
export function createPaystack(secret, fetcher = fetch) {
  const request = async (path, body) => {
    const response = await fetcher("https://api.paystack.co" + path, {
      method: body ? "POST" : "GET",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/json",
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
      signal: AbortSignal.timeout(15000),
    });
    const result = await response.json();
    if (!response.ok || !result.status || !result.data)
      throw new Error("PAYSTACK_UNAVAILABLE");
    return result.data;
  };
  return {
    configured: !!secret,
    mode: secret?.startsWith("sk_live_")
      ? "live"
      : secret
        ? "test"
        : "unconfigured",
    async initialize(data) {
      const payment = await request("/transaction/initialize", data);
      const url = new URL(payment.authorization_url);
      if (
        url.protocol !== "https:" ||
        url.hostname !== "checkout.paystack.com" ||
        payment.reference !== data.reference
      )
        throw new Error("PAYSTACK_INVALID_RESPONSE");
      return { authorizationUrl: url.href };
    },
    verify: (reference) =>
      request("/transaction/verify/" + encodeURIComponent(reference)),
    signature: (raw, value) => validSignature(raw, value, secret),
  };
}
export async function confirmPayment(store, paystack, reference) {
  const saved = await store.donation(reference);
  if (!saved) return null;
  if (saved.status === "success")
    return {
      reference,
      status: "success",
      amount: saved.amount,
      currency: saved.currency,
    };
  const data = await paystack.verify(reference);
  if (
    data.reference !== reference ||
    data.amount !== saved.amount ||
    data.currency !== "NGN" ||
    String(data.customer?.email || "").toLowerCase() !== saved.email
  )
    throw new Error("PAYMENT_MISMATCH");
  if (data.status === "success") await store.paid(reference, data);
  else if (["failed", "abandoned"].includes(data.status))
    await store.paymentStatus(reference, data.status);
  return {
    reference,
    status:
      data.status === "success"
        ? "success"
        : data.status === "failed" || data.status === "abandoned"
          ? data.status
          : "pending",
    amount: saved.amount,
    currency: saved.currency,
  };
}
