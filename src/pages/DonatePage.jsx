import { apiRequest } from "../api.js";
import PaymentStatus from "../PaymentStatus.jsx";
import {
  React,
  usePageTitle,
  Or,
  PageLayout,
  Nr,
  Component_wt,
  St,
  QA,
  donationAmounts,
  $e,
  Component_cE,
  Component_jr,
  Component_sn,
} from "../site.jsx";
export default function DonatePage() {
  usePageTitle("Donate");
  const [gateway, setGateway] = React.useState({
    configured: false,
    mode: "loading",
  });
  const [purpose, setPurpose] = React.useState("projects");
  const requestAttempt = React.useRef(null);
  React.useEffect(() => {
    let active = true;
    apiRequest("/api/payments/config")
      .then((data) => {
        if (active) setGateway(data);
      })
      .catch(() => {
        if (active) setGateway({ configured: false, mode: "unavailable" });
      });
    return () => {
      active = false;
    };
  }, []);
  const { toast: t } = Or(),
    [i, a] = React.useState(5e3),
    [r, l] = React.useState(""),
    [d, f] = React.useState(!1),
    [m, g] = React.useState({
      name: "",
      email: "",
      phone: "",
    }),
    [p, y] = React.useState(!1),
    x = d ? Number(r) || 0 : i || 0,
    b = async () => {
      if (!Number.isFinite(x) || x < 100 || x > 10000000) {
        t({
          title: "Check donation amount",
          description: "Please enter a donation between ₦100 and ₦10,000,000.",
          variant: "destructive",
        });
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email)) {
        t({
          title: "Email required",
          description: "Please enter a valid email address for your receipt.",
          variant: "destructive",
        });
        return;
      }
      y(true);
      const payload = { amount: x, ...m, purpose },
        fingerprint = JSON.stringify(payload);
      if (requestAttempt.current?.fingerprint !== fingerprint)
        requestAttempt.current = { fingerprint, key: crypto.randomUUID() };
      try {
        const result = await apiRequest("/api/payments/initialize", {
          method: "POST",
          body: payload,
          headers: { "Idempotency-Key": requestAttempt.current.key },
        });
        const checkout = new URL(result.authorizationUrl);
        if (
          checkout.protocol !== "https:" ||
          checkout.hostname !== "checkout.paystack.com"
        )
          throw new Error("Invalid checkout address. Please contact FODADY.");
        window.location.assign(checkout.href);
      } catch (error) {
        if (error.status === 502) requestAttempt.current = null;
        t({
          title: "Checkout unavailable",
          description: error.message,
          variant: "destructive",
        });
        y(false);
      }
    };
  return (
    <PageLayout>
      <PaymentStatus />
      <div className="bg-accent py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <Nr className="h-12 w-12 mx-auto mb-4 fill-current opacity-80" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {"Support Our Mission"}
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            {
              "Your generosity helps us build libraries, empower youths, and transform lives across Nigeria."
            }
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <Component_wt className="shadow-xl border-primary/10">
                <St className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <QA className="h-6 w-6 text-primary" />
                    <h2
                      className="text-2xl font-bold text-primary"
                      data-testid="text-donate-online"
                    >
                      {"Donate Online"}
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="gateway-notice" role="status">
                        {gateway.mode === "loading"
                          ? "Checking secure checkout…"
                          : gateway.configured
                            ? gateway.mode === "test"
                              ? "Paystack test mode — use test payment details."
                              : "Secure online donations powered by Paystack."
                            : "Online checkout is not enabled yet. The bank transfer options below remain available."}
                      </div>
                      <label className="text-sm font-medium block mb-3">
                        {"Select Amount (₦)"}
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {donationAmounts.map((j) => (
                          <button
                            data-testid={`button-amount-${j}`}
                            onClick={() => {
                              (a(j), f(!1), l(""));
                            }}
                            className={`py-3 px-4 rounded-lg border-2 text-center font-bold transition-all ${!d && i === j ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"}`}
                            key={j}
                          >
                            {"₦"}
                            {j.toLocaleString()}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <button
                        data-testid="button-custom-amount"
                        onClick={() => {
                          (f(!0), a(null));
                        }}
                        className={`text-sm font-medium mb-2 ${d ? "text-primary" : "text-muted-foreground hover:text-primary"} transition-colors`}
                      >
                        {"Enter custom amount"}
                      </button>
                      {d && (
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">
                            {"₦"}
                          </span>
                          <input
                            data-testid="input-custom-amount"
                            type="number"
                            min="100"
                            max="10000000"
                            step="0.01"
                            placeholder="Enter amount"
                            value={r}
                            onChange={(j) => l(j.target.value)}
                            className="flex h-12 w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-lg font-bold ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          />
                        </div>
                      )}
                    </div>
                    <div className="border-t pt-6 space-y-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="donor-name"
                          className="text-sm font-medium"
                        >
                          {"Your Name (optional)"}
                        </label>
                        <input
                          id="donor-name"
                          data-testid="input-donor-name"
                          className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="Your full name"
                          value={m.name}
                          onChange={(j) =>
                            g({
                              ...m,
                              name: j.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="donor-email"
                          className="text-sm font-medium"
                        >
                          {"Email Address *"}
                        </label>
                        <input
                          id="donor-email"
                          data-testid="input-donor-email"
                          type="email"
                          className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="you@example.com"
                          value={m.email}
                          onChange={(j) =>
                            g({
                              ...m,
                              email: j.target.value,
                            })
                          }
                          required={!0}
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="donor-phone"
                          className="text-sm font-medium"
                        >
                          {"Phone Number (optional)"}
                        </label>
                        <input
                          id="donor-phone"
                          data-testid="input-donor-phone"
                          type="tel"
                          className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="+234..."
                          value={m.phone}
                          onChange={(j) =>
                            g({
                              ...m,
                              phone: j.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="donation-purpose">
                      <label htmlFor="donation-purpose">
                        I’d like to support
                      </label>
                      <select
                        id="donation-purpose"
                        value={purpose}
                        onChange={(event) => setPurpose(event.target.value)}
                      >
                        <option value="projects">
                          Library and rehabilitation projects
                        </option>
                        <option value="operations">FODADY’s operations</option>
                      </select>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 flex items-center justify-between">
                      <span className="text-muted-foreground font-medium">
                        {"Donation Amount:"}
                      </span>
                      <span
                        className="text-2xl font-bold text-primary"
                        data-testid="text-total-amount"
                      >
                        {"₦"}
                        {x.toLocaleString()}
                      </span>
                    </div>
                    <$e
                      data-testid="button-donate-pay"
                      onClick={b}
                      disabled={p || x < 100 || !gateway.configured}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-14 text-lg"
                    >
                      {p ? (
                        "Opening secure checkout…"
                      ) : (
                        <React.Fragment>
                          <Nr className="mr-2 h-5 w-5 fill-current" />
                          {"Donate ₦"}
                          {x.toLocaleString()}
                        </React.Fragment>
                      )}
                    </$e>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <Component_cE className="h-4 w-4" />
                      <span>
                        {
                          "Continue to Paystack’s secure checkout. We never collect or store your card details."
                        }
                      </span>
                    </div>
                  </div>
                </St>
              </Component_wt>
            </div>
            <div className="md:col-span-2 space-y-6">
              <Component_wt className="border-primary/10 shadow-lg">
                <St className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Component_jr className="h-5 w-5 text-primary" />
                    <h3
                      className="text-lg font-bold"
                      data-testid="text-bank-transfer-admin"
                    >
                      {"Admin Account Transfer Details"}
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">{"Bank:"}</span>
                      <span className="font-bold">{"Fidelity Bank"}</span>
                    </div>
                    <div className="border-b pb-2">
                      <span className="text-muted-foreground block text-xs mb-1">
                        {"Account Name:"}
                      </span>
                      <span className="font-bold text-primary text-xs leading-tight">
                        {
                          "Foundation for the development of able and disable youths"
                        }
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {"Account No:"}
                      </span>
                      <span
                        className="font-bold font-mono"
                        data-testid="text-account-number-admin"
                      >
                        {"5601504190"}
                      </span>
                    </div>
                  </div>
                </St>
              </Component_wt>
              <Component_wt className="border-primary/10 shadow-lg">
                <St className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Component_jr className="h-5 w-5 text-primary" />
                    <h3
                      className="text-lg font-bold"
                      data-testid="text-bank-transfer-project"
                    >
                      {"Project Account Transfer Details"}
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">{"Bank:"}</span>
                      <span className="font-bold">
                        {"United Bank for Africa"}
                      </span>
                    </div>
                    <div className="border-b pb-2">
                      <span className="text-muted-foreground block text-xs mb-1">
                        {"Account Name:"}
                      </span>
                      <span className="font-bold text-primary text-xs leading-tight">
                        {
                          "Foundation for the development of able and disable youths"
                        }
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {"Account No:"}
                      </span>
                      <span
                        className="font-bold font-mono"
                        data-testid="text-account-number-project"
                      >
                        {"1029827599"}
                      </span>
                    </div>
                  </div>
                </St>
              </Component_wt>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900 font-medium">
                {
                  "If your donation is meant to support our operations, please ensure it is sent to the "
                }
                <strong>{"admin account"}</strong>
                {
                  ". Donations meant to support our projects should be sent to the "
                }
                <strong>{"project account"}</strong>
                {"."}
              </div>
              <Component_wt className="bg-primary/5 border-primary/10">
                <St className="p-6">
                  <h3 className="font-bold text-primary mb-4">
                    {"Your Impact"}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Component_sn className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong>{"₦1,000"}</strong>
                        {" can buy writing materials for a prison library"}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Component_sn className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong>{"₦5,000"}</strong>
                        {" can buy an educational book for one youth"}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Component_sn className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong>{"₦10,000"}</strong>
                        {" supports monthly library maintenance"}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Component_sn className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong>{"₦50,000"}</strong>
                        {
                          " can facilitate setting up a mini library in a correctional facility"
                        }
                      </span>
                    </div>
                  </div>
                </St>
              </Component_wt>
              <div className="text-center p-4">
                <p className="text-sm text-muted-foreground">
                  {
                    "FODADY is a registered NGO in Nigeria. All donations go directly to our programs."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
