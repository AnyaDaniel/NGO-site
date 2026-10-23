import { React, PageLayout, usePageTitle } from "../site.jsx";
import { apiRequest } from "../api.js";
const groups = [
  ["contacts", "Contact messages"],
  ["volunteers", "Volunteer applications"],
  ["newsletters", "Newsletter subscribers"],
  ["donations", "Online donations"],
];
const formatDate = (value) =>
  value
    ? new Date(value).toLocaleString("en-NG", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "—";
export default function AdminPage() {
  usePageTitle("Admin Dashboard");
  const [credential, setCredential] = React.useState(""),
    [token, setToken] = React.useState(""),
    [records, setRecords] = React.useState({
      contacts: [],
      volunteers: [],
      newsletters: [],
      donations: [],
    }),
    [tab, setTab] = React.useState("contacts"),
    [error, setError] = React.useState(""),
    [busy, setBusy] = React.useState(false);
  const load = async (key) => {
    const data = await Promise.all(
      groups.map(async ([kind]) => [
        kind,
        await apiRequest("/api/admin/" + kind, {
          headers: { Authorization: "Bearer " + key },
        }),
      ]),
    );
    setRecords(Object.fromEntries(data));
  };
  const login = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      await apiRequest("/api/admin/session", {
        method: "POST",
        headers: { Authorization: "Bearer " + credential },
      });
      await load(credential);
      setToken(credential);
      setCredential("");
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };
  const refresh = async () => {
    setBusy(true);
    setError("");
    try {
      await load(token);
    } catch (e) {
      setError(e.message);
      if (e.status === 401) setToken("");
    } finally {
      setBusy(false);
    }
  };
  return (
    <PageLayout>
      <section className="admin-shell container mx-auto px-4 py-16">
        <div className="admin-heading">
          <div>
            <span className="backend-eyebrow">FODADY / ADMINISTRATION</span>
            <h1>{token ? "Your work. In one place." : "Welcome back."}</h1>
            <p>
              {token
                ? "Messages, applications, subscribers, and verified donation records."
                : "Sign in to manage the conversations and contributions behind our work."}
            </p>
          </div>
          {token && (
            <div className="admin-toolbar">
              <button onClick={refresh} disabled={busy}>
                {busy ? "Refreshing…" : "Refresh ↻"}
              </button>
              <button
                onClick={() => {
                  setToken("");
                  setRecords({
                    contacts: [],
                    volunteers: [],
                    newsletters: [],
                    donations: [],
                  });
                  setError("");
                }}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        {!token ? (
          <form onSubmit={login} className="admin-login">
            <span className="admin-lock" aria-hidden="true">
              ↗
            </span>
            <h2>Administrator access</h2>
            <p>
              Use the access key configured for this website. It stays in memory
              and is cleared when you sign out or close this page.
            </p>
            <label htmlFor="admin-key">Administrator access key</label>
            <input
              id="admin-key"
              type="password"
              autoComplete="current-password"
              required
              minLength={32}
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
            />
            <button disabled={busy}>
              {busy ? "Signing in…" : "Open dashboard →"}
            </button>
          </form>
        ) : (
          <>
            <div className="admin-stats">
              {groups.map(([kind, label]) => (
                <button
                  key={kind}
                  onClick={() => setTab(kind)}
                  className={tab === kind ? "is-selected" : ""}
                >
                  <span>{label}</span>
                  <strong>{records[kind].length}</strong>
                  <small>View records ↗</small>
                </button>
              ))}
            </div>
            <div
              className="admin-tabs"
              role="tablist"
              aria-label="Submission categories"
            >
              {groups.map(([kind, label]) => (
                <button
                  key={kind}
                  role="tab"
                  id={"tab-" + kind}
                  aria-controls="admin-records"
                  aria-selected={tab === kind}
                  tabIndex={tab === kind ? 0 : -1}
                  onKeyDown={(e) => {
                    if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
                      e.preventDefault();
                      const index = groups.findIndex(([k]) => k === tab),
                        next =
                          groups[
                            (index + (e.key === "ArrowRight" ? 1 : 3)) % 4
                          ][0];
                      setTab(next);
                      document.getElementById("tab-" + next)?.focus();
                    }
                  }}
                  onClick={() => setTab(kind)}
                >
                  {label}
                </button>
              ))}
            </div>
            <div
              id="admin-records"
              role="tabpanel"
              aria-labelledby={"tab-" + tab}
              className="admin-records"
              aria-busy={busy}
            >
              {!records[tab].length ? (
                <div className="admin-empty">
                  <span>◎</span>
                  <h2>Nothing here yet.</h2>
                  <p>
                    New {groups.find(([kind]) => kind === tab)[1].toLowerCase()}{" "}
                    will appear here after they’re received.
                  </p>
                </div>
              ) : (
                records[tab].map((row) => (
                  <article
                    className="admin-record"
                    key={row.id || row.reference}
                  >
                    <div className="admin-record-top">
                      <strong>
                        {row.name ||
                          [row.firstName, row.lastName]
                            .filter(Boolean)
                            .join(" ") ||
                          row.email}
                      </strong>
                      <time>{formatDate(row.createdAt)}</time>
                    </div>
                    <a href={"mailto:" + row.email}>{row.email}</a>
                    {row.phone && <p>{row.phone}</p>}
                    {row.subject && <h3>{row.subject}</h3>}
                    {row.areaOfInterest && <h3>{row.areaOfInterest}</h3>}
                    {row.message && (
                      <p className="admin-message">{row.message}</p>
                    )}
                    {tab === "donations" && (
                      <>
                        <div className="donation-record">
                          <strong>
                            ₦{(row.amount / 100).toLocaleString("en-NG")}
                          </strong>
                          <span
                            className={
                              "payment-state " +
                              (row.status === "success" ? "is-paid" : "")
                            }
                          >
                            {row.status.replaceAll("_", " ")}
                          </span>
                        </div>
                        <p>
                          Purpose:{" "}
                          {row.purpose === "operations"
                            ? "Operations"
                            : "Projects"}
                        </p>
                        <small>Reference: {row.reference}</small>
                        {row.paidAt && (
                          <p>Confirmed: {formatDate(row.paidAt)}</p>
                        )}
                      </>
                    )}
                  </article>
                ))
              )}
            </div>
            <p className="admin-record-limit">
              Showing the latest 500 records in each category. Newsletter
              subscriptions are collected here; email campaigns are managed
              separately.
            </p>
          </>
        )}
      </section>
    </PageLayout>
  );
}
