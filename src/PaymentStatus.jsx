import { S as React } from "./vendor/runtime.js";
import { apiRequest } from "./api.js";
export default function PaymentStatus() {
  const reference =
    new URLSearchParams(window.location.search).get("reference") ||
    new URLSearchParams(window.location.search).get("trxref");
  const [attempt, setAttempt] = React.useState(0),
    [result, setResult] = React.useState(null),
    [error, setError] = React.useState("");
  React.useEffect(() => {
    if (!reference) return;
    let active = true;
    setResult(null);
    setError("");
    apiRequest(
      "/api/payments/verify?reference=" + encodeURIComponent(reference),
    )
      .then((data) => {
        if (active) setResult(data);
      })
      .catch((e) => {
        if (active) setError(e.message);
      });
    return () => {
      active = false;
    };
  }, [reference, attempt]);
  if (!reference) return null;
  const paid = result?.status === "success";
  return (
    <section
      className={"payment-feedback " + (paid ? "is-success" : "")}
      role="status"
      aria-live="polite"
    >
      <span className="payment-feedback-icon" aria-hidden="true">
        {paid ? "✓" : error ? "!" : result ? "↻" : "◌"}
      </span>
      <div>
        <h2>
          {paid
            ? "Thank you. Your donation is confirmed."
            : error
              ? "We couldn’t confirm this payment"
              : result?.status === "failed" || result?.status === "abandoned"
                ? "Payment was not completed"
                : result
                  ? "Your payment is still being confirmed"
                  : "Confirming your payment…"}
        </h2>
        <p>
          {paid
            ? `We received ₦${(result.amount / 100).toLocaleString("en-NG")} to support FODADY’s work.`
            : error ||
              "We only confirm a donation after checking its status securely with Paystack."}
        </p>
        <small>Reference: {reference}</small>
        {!paid && (error || result) && (
          <button
            type="button"
            className="payment-retry"
            onClick={() => setAttempt(attempt + 1)}
          >
            Check payment status again ↻
          </button>
        )}
      </div>
    </section>
  );
}
