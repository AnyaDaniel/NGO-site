import { S as React, Fe, BT } from "../vendor/runtime.js";
import { siteNavigation } from "../navigation.js";
function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  );
}
export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const menu = React.useRef(null);
  const toggle = React.useRef(null);
  const [location] = BT();
  React.useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (
        !menu.current?.contains(event.target) &&
        !toggle.current?.contains(event.target)
      )
        setOpen(false);
    };
    const key = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", key);
    };
  }, [open]);
  return (
    <header className="new-header">
      <div className="home-container new-header-inner">
        <Fe href="/" className="new-brand" aria-label="FODADY home">
          <img
            src="/assets/fodady_logo-CSOCncgO.png"
            alt=""
            width="75"
            height="50"
          />
          <span>
            FODADY<small>Knowledge. Dignity. Possibility.</small>
          </span>
        </Fe>
        <div className="new-header-actions">
          <Fe href="/donate" className="home-button lime compact">
            Donate Now <Arrow diagonal />
          </Fe>
          <button
            ref={toggle}
            className="new-menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="new-mobile-menu"
          >
            <i className="menu-lines" aria-hidden="true">
              <span className={open ? "is-open" : ""} />
              <span className={open ? "is-open" : ""} />
            </i>
            <b className="menu-caption">Menu</b>
          </button>
        </div>
        {open && (
          <nav
            ref={menu}
            className="new-mobile-menu"
            id="new-mobile-menu"
            aria-label="Site navigation"
          >
            {[...siteNavigation, { label: "Donate Now", href: "/donate" }].map(
              ({ label, href }) => (
                <Fe
                  href={href}
                  key={href}
                  aria-current={location === href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                  <Arrow diagonal />
                </Fe>
              ),
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
