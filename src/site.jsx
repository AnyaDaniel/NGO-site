import SiteHeader from "./components/SiteHeader.jsx";
import { apiRequest } from "./api.js";
import { siteNavigation } from "./navigation.js";
import DonatePage from "./pages/DonatePage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import CurrentFocusPage from "./pages/CurrentFocusPage.jsx";
import LeadershipPage from "./pages/LeadershipPage.jsx";
import PrisonLibrariesPage from "./pages/PrisonLibrariesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import FocusAreasPage from "./pages/FocusAreasPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import GetInvolvedPage from "./pages/GetInvolvedPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import OriginalHomePage from "./pages/OriginalHomePage.jsx";
import { usePageMotion } from "./motion.js";
// Recovered from the public FODADY frontend; original identifiers were unavailable.
// Page components and layouts below are editable JSX.
import {
  S as React,
  BT,
  c,
  Fe,
  O0,
  rE as Component_rE,
  Xe,
  $e,
  Nr,
  Or,
  dh,
  XA,
  nE as Component_nE,
  mE as Component_mE,
  Tf,
  R0,
  D0,
  ra as Component_ra,
  E0,
  ia as Component_ia,
  C0,
  gb as Component_gb,
  yl,
  Gd,
  wt as Component_wt,
  St,
  sn as Component_sn,
  UA,
  jr as Component_jr,
  ZA,
  Af,
  Xx,
  e0,
  ha,
  on,
  mh,
  Mi,
  We,
  Le,
  $0,
  Mr,
  sc,
  Hd,
  Sl,
  jl as Component_jl,
  QA,
  cE as Component_cE,
  FT,
  nn as Component_nn,
  ID,
  p2 as Component_p2,
  D2,
  GD,
  cC as Component_cC,
  xT,
} from "./vendor/runtime.js";
const logoImage = "/assets/fodady_logo-CSOCncgO.png";
const Header = SiteHeader;

const Input = React.forwardRef(({ className: t, type: i, ...a }, r) => (
  <input
    type={i}
    className={Xe(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t,
    )}
    ref={r}
    {...a}
  />
));
Input.displayName = "Input";
function Footer() {
  const { toast: t } = Or(),
    [i, a] = React.useState(""),
    r = dh({
      mutationFn: async (d) => {
        return apiRequest("/api/newsletter", {
          method: "POST",
          body: { email: d },
        });
      },
      onSuccess: () => {
        (t({
          title: "Subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        }),
          a(""));
      },
      onError: (d) => {
        t({
          title: "Error",
          description:
            d.message === "Email already subscribed"
              ? "This email is already subscribed to our newsletter."
              : "Failed to subscribe. Please try again.",
          variant: "destructive",
        });
      },
    }),
    l = (d) => {
      (d.preventDefault(), r.mutate(i));
    };
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="FODADY - Foundation for the Development of Able and Disabled Youths logo"
                className="h-20 w-auto bg-white rounded-lg p-2"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-white">
                  {"FODADY"}
                </span>
                <span className="text-xs font-semibold text-white/80">
                  {"Education • Rehabilitation • Reintegration"}
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {
                "Foundation for the Development of Able and Disabled Youths. Using libraries and knowledge to support education, rehabilitation, and reintegration across Nigeria."
              }
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <XA className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <Component_nE className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <Component_mE className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">{"Quick Links"}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <Fe
                  href="/about"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  {"About Us"}
                </Fe>
              </li>
              <li>
                <Fe
                  href="/focus-areas"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  {"Our Focus"}
                </Fe>
              </li>
              <li>
                <Fe
                  href="/prison-libraries"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  {"Prison Libraries & Rehabilitation"}
                </Fe>
              </li>
              <li>
                <Fe
                  href="/projects"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  {"Projects & Impact"}
                </Fe>
              </li>
              <li>
                <Fe
                  href="/get-involved"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  {"Volunteer"}
                </Fe>
              </li>
              <li>
                <Fe
                  href="/contact"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  {"Contact"}
                </Fe>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">{"Contact Us"}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start space-x-3">
                <Tf className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                <div className="flex flex-col gap-1">
                  <span>
                    {
                      "Head Office: Shopping Mall, Efab Metropolis Estate, Karsana, Abuja"
                    }
                  </span>
                  <span>
                    {
                      "Training Center: Shopping Mall, CGC Quarry Junction, Ushafa, Abuja"
                    }
                  </span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <R0 className="h-5 w-5 shrink-0 text-accent" />
                <span>
                  <a href="tel:+2348035786148" className="hover:text-white">
                    {"+2348035786148"}
                  </a>
                  {", "}
                  <a href="tel:+2348099395191" className="hover:text-white">
                    {"+2348099395191"}
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <D0 className="h-5 w-5 shrink-0 text-accent" />
                <div className="flex flex-col">
                  <a href="mailto:info@fodady.org" className="hover:text-white">
                    {"info@fodady.org"}
                  </a>
                  <a
                    href="mailto:partnerships@fodady.org"
                    className="hover:text-white"
                  >
                    {"partnerships@fodady.org"}
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">{"Stay Updated"}</h4>
            <p className="text-sm text-primary-foreground/80">
              {
                "Subscribe to our newsletter for updates on our projects and impact."
              }
            </p>
            <form
              aria-busy={r.isPending}
              onSubmit={l}
              className="flex flex-col space-y-2"
            >
              <Input
                type="email"
                aria-label="Newsletter email address"
                autoComplete="email"
                maxLength={254}
                placeholder="Your email address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-white placeholder:text-primary-foreground/50 focus:border-accent focus:ring-accent"
                value={i}
                onChange={(d) => a(d.target.value)}
                required={!0}
              />
              <$e
                type="submit"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold w-full"
                disabled={r.isPending}
              >
                {r.isPending ? "Subscribing..." : "Subscribe"}
              </$e>
            </form>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-primary-foreground/70">
          <p>{"FODADY is a registered NGO in Nigeria. IT 91419"}</p>
        </div>
        <div className="mt-4 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>
            {"© "}
            {new Date().getFullYear()}
            {" FODADY. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
function PageLayout({ children: t }) {
  const mainRef = React.useRef(null);
  usePageMotion(mainRef);
  return (
    <div className="site-page flex min-h-screen flex-col font-sans">
      <Header />
      <main ref={mainRef} className="flex-1">
        {t}
      </main>
      <Footer />
    </div>
  );
}
const Rb = "FODADY";
function usePageTitle(t) {
  React.useEffect(() => {
    document.title = t
      ? `${t} | ${Rb}`
      : `${Rb}- Libraries - Empowering Youth. Restoring Dignity. Transforming Futures.`;
  }, [t]);
}
const Ob =
    "/assets/diverse_nigerian_youths_collaborating_outdoors-CjXY2h8x.png",
  Z4 = "/assets/diverse_group_of_afr_7bfdae4e-Ce1FAL3K.jpg",
  $4 = "/assets/african_community_yo_335a85cc-xeaNYU7h.jpg",
  rm = "/assets/vocational_training_hands-CupiwYYr.png",
  W4 = "/assets/unity_and_inclusion_symbol-jZrgqS4w.png";
const fS =
    "/assets/ChatGPT_Image_Feb_11__2026__11_37_20_PM_1770849581935-BiXXSlq5.png",
  hS = "/assets/community_library_in_nigeria-BSMwBXRj.png",
  n6 = "/assets/nigerian_youth_training_workshop-CThASEFm.png",
  i6 = "/assets/african_disability_inclusion_support-CzZ-E536.png";
const Textarea = React.forwardRef(({ className: t, ...i }, a) => (
  <textarea
    className={Xe(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t,
    )}
    ref={a}
    {...i}
  />
));
Textarea.displayName = "Textarea";
const l6 = "/assets/jessica_odozi-BNt4la88.png",
  c6 = "/assets/abraham_oghani-DzVVR_HI.png",
  u6 = "/assets/anita_okeleke-DHbaSvU4.png",
  d6 = "/assets/innocent_ulasi-D0CQ95vU.png";
var m6 = React.createContext(void 0);
function pS(t) {
  const i = React.useContext(m6);
  return t || i || "ltr";
}
var hf = "rovingFocusGroup.onEntryFocus",
  p6 = {
    bubbles: !1,
    cancelable: !0,
  },
  Pr = "RovingFocusGroup",
  [ih, gS, g6] = e0(Pr),
  [y6, yS] = ha(Pr, [g6]),
  [Component_x6, v6] = y6(Pr),
  xS = React.forwardRef((t, i) => (
    <ih.Provider scope={t.__scopeRovingFocusGroup}>
      <ih.Slot scope={t.__scopeRovingFocusGroup}>
        <Component_b6 {...t} ref={i} />
      </ih.Slot>
    </ih.Provider>
  ));
xS.displayName = Pr;
var Component_b6 = React.forwardRef((t, i) => {
    const {
        __scopeRovingFocusGroup: a,
        orientation: r,
        loop: l = !1,
        dir: d,
        currentTabStopId: f,
        defaultCurrentTabStopId: m,
        onCurrentTabStopIdChange: g,
        onEntryFocus: p,
        preventScrollOnEntryFocus: y = !1,
        ...x
      } = t,
      b = React.useRef(null),
      j = on(i, b),
      T = pS(d),
      [N, A] = mh({
        prop: f,
        defaultProp: m ?? null,
        onChange: g,
        caller: Pr,
      }),
      [C, M] = React.useState(!1),
      O = Mi(p),
      k = gS(a),
      H = React.useRef(!1),
      [Q, F] = React.useState(0);
    return (
      React.useEffect(() => {
        const z = b.current;
        if (z)
          return (
            z.addEventListener(hf, O),
            () => z.removeEventListener(hf, O)
          );
      }, [O]),
      (
        <Component_x6
          scope={a}
          orientation={r}
          dir={T}
          loop={l}
          currentTabStopId={N}
          onItemFocus={React.useCallback((z) => A(z), [A])}
          onItemShiftTab={React.useCallback(() => M(!0), [])}
          onFocusableItemAdd={React.useCallback(() => F((z) => z + 1), [])}
          onFocusableItemRemove={React.useCallback(() => F((z) => z - 1), [])}
        >
          <We.div
            tabIndex={C || Q === 0 ? -1 : 0}
            data-orientation={r}
            {...x}
            ref={j}
            style={{
              outline: "none",
              ...t.style,
            }}
            onMouseDown={Le(t.onMouseDown, () => {
              H.current = !0;
            })}
            onFocus={Le(t.onFocus, (z) => {
              const W = !H.current;
              if (z.target === z.currentTarget && W && !C) {
                const $ = new CustomEvent(hf, p6);
                if ((z.currentTarget.dispatchEvent($), !$.defaultPrevented)) {
                  const J = k().filter((_) => _.focusable),
                    ne = J.find((_) => _.active),
                    he = J.find((_) => _.id === N),
                    me = [ne, he, ...J]
                      .filter(Boolean)
                      .map((_) => _.ref.current);
                  wS(me, y);
                }
              }
              H.current = !1;
            })}
            onBlur={Le(t.onBlur, () => M(!1))}
          />
        </Component_x6>
      )
    );
  }),
  vS = "RovingFocusGroupItem",
  bS = React.forwardRef((t, i) => {
    const {
        __scopeRovingFocusGroup: a,
        focusable: r = !0,
        active: l = !1,
        tabStopId: d,
        children: f,
        ...m
      } = t,
      g = $0(),
      p = d || g,
      y = v6(vS, a),
      x = y.currentTabStopId === p,
      b = gS(a),
      {
        onFocusableItemAdd: j,
        onFocusableItemRemove: T,
        currentTabStopId: N,
      } = y;
    return (
      React.useEffect(() => {
        if (r) return (j(), () => T());
      }, [r, j, T]),
      (
        <ih.ItemSlot scope={a} id={p} focusable={r} active={l}>
          <We.span
            tabIndex={x ? 0 : -1}
            data-orientation={y.orientation}
            {...m}
            ref={i}
            onMouseDown={Le(t.onMouseDown, (A) => {
              r ? y.onItemFocus(p) : A.preventDefault();
            })}
            onFocus={Le(t.onFocus, () => y.onItemFocus(p))}
            onKeyDown={Le(t.onKeyDown, (A) => {
              if (A.key === "Tab" && A.shiftKey) {
                y.onItemShiftTab();
                return;
              }
              if (A.target !== A.currentTarget) return;
              const C = j6(A, y.orientation, y.dir);
              if (C !== void 0) {
                if (A.metaKey || A.ctrlKey || A.altKey || A.shiftKey) return;
                A.preventDefault();
                let O = b()
                  .filter((k) => k.focusable)
                  .map((k) => k.ref.current);
                if (C === "last") O.reverse();
                else if (C === "prev" || C === "next") {
                  C === "prev" && O.reverse();
                  const k = O.indexOf(A.currentTarget);
                  O = y.loop ? N6(O, k + 1) : O.slice(k + 1);
                }
                setTimeout(() => wS(O));
              }
            })}
          >
            {typeof f == "function"
              ? f({
                  isCurrentTabStop: x,
                  hasTabStop: N != null,
                })
              : f}
          </We.span>
        </ih.ItemSlot>
      )
    );
  });
bS.displayName = vS;
var w6 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function S6(t, i) {
  return i !== "rtl"
    ? t
    : t === "ArrowLeft"
      ? "ArrowRight"
      : t === "ArrowRight"
        ? "ArrowLeft"
        : t;
}
function j6(t, i, a) {
  const r = S6(t.key, a);
  if (
    !(i === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(i === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return w6[r];
}
function wS(t, i = !1) {
  const a = document.activeElement;
  for (const r of t)
    if (
      r === a ||
      (r.focus({
        preventScroll: i,
      }),
      document.activeElement !== a)
    )
      return;
}
function N6(t, i) {
  return t.map((a, r) => t[(i + r) % t.length]);
}
var T6 = xS,
  A6 = bS,
  pc = "Tabs",
  [E6] = ha(pc, [yS]),
  SS = yS(),
  [C6, om] = E6(pc),
  jS = React.forwardRef((t, i) => {
    const {
        __scopeTabs: a,
        value: r,
        onValueChange: l,
        defaultValue: d,
        orientation: f = "horizontal",
        dir: m,
        activationMode: g = "automatic",
        ...p
      } = t,
      y = pS(m),
      [x, b] = mh({
        prop: r,
        onChange: l,
        defaultProp: d ?? "",
        caller: pc,
      });
    return (
      <C6
        scope={a}
        baseId={$0()}
        value={x}
        onValueChange={b}
        orientation={f}
        dir={y}
        activationMode={g}
      >
        <We.div dir={y} data-orientation={f} {...p} ref={i} />
      </C6>
    );
  });
jS.displayName = pc;
var NS = "TabsList",
  TS = React.forwardRef((t, i) => {
    const { __scopeTabs: a, loop: r = !0, ...l } = t,
      d = om(NS, a),
      f = SS(a);
    return (
      <T6 asChild={!0} {...f} orientation={d.orientation} dir={d.dir} loop={r}>
        <We.div
          role="tablist"
          aria-orientation={d.orientation}
          {...l}
          ref={i}
        />
      </T6>
    );
  });
TS.displayName = NS;
var AS = "TabsTrigger",
  ES = React.forwardRef((t, i) => {
    const { __scopeTabs: a, value: r, disabled: l = !1, ...d } = t,
      f = om(AS, a),
      m = SS(a),
      g = RS(f.baseId, r),
      p = OS(f.baseId, r),
      y = r === f.value;
    return (
      <A6 asChild={!0} {...m} focusable={!l} active={y}>
        <We.button
          type="button"
          role="tab"
          aria-selected={y}
          aria-controls={p}
          data-state={y ? "active" : "inactive"}
          data-disabled={l ? "" : void 0}
          disabled={l}
          id={g}
          {...d}
          ref={i}
          onMouseDown={Le(t.onMouseDown, (x) => {
            !l && x.button === 0 && x.ctrlKey === !1
              ? f.onValueChange(r)
              : x.preventDefault();
          })}
          onKeyDown={Le(t.onKeyDown, (x) => {
            [" ", "Enter"].includes(x.key) && f.onValueChange(r);
          })}
          onFocus={Le(t.onFocus, () => {
            const x = f.activationMode !== "manual";
            !y && !l && x && f.onValueChange(r);
          })}
        />
      </A6>
    );
  });
ES.displayName = AS;
var CS = "TabsContent",
  DS = React.forwardRef((t, i) => {
    const { __scopeTabs: a, value: r, forceMount: l, children: d, ...f } = t,
      m = om(CS, a),
      g = RS(m.baseId, r),
      p = OS(m.baseId, r),
      y = r === m.value,
      x = React.useRef(y);
    return (
      React.useEffect(() => {
        const b = requestAnimationFrame(() => (x.current = !1));
        return () => cancelAnimationFrame(b);
      }, []),
      (
        <Mr present={l || y}>
          {({ present: b }) => (
            <We.div
              data-state={y ? "active" : "inactive"}
              data-orientation={m.orientation}
              role="tabpanel"
              aria-labelledby={g}
              hidden={!b}
              id={p}
              tabIndex={0}
              {...f}
              ref={i}
              style={{
                ...t.style,
                animationDuration: x.current ? "0s" : void 0,
              }}
            >
              {b && d}
            </We.div>
          )}
        </Mr>
      )
    );
  });
DS.displayName = CS;
function RS(t, i) {
  return `${t}-trigger-${i}`;
}
function OS(t, i) {
  return `${t}-content-${i}`;
}
var D6 = jS,
  MS = TS,
  Component__S = ES,
  Component_zS = DS;
const R6 = D6,
  LS = React.forwardRef(({ className: t, ...i }, a) => (
    <MS
      ref={a}
      className={Xe(
        "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        t,
      )}
      {...i}
    />
  ));
LS.displayName = MS.displayName;
const Component__l = React.forwardRef(({ className: t, ...i }, a) => (
  <Component__S
    ref={a}
    className={Xe(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      t,
    )}
    {...i}
  />
));
Component__l.displayName = Component__S.displayName;
const Component_zl = React.forwardRef(({ className: t, ...i }, a) => (
  <Component_zS
    ref={a}
    className={Xe(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t,
    )}
    {...i}
  />
));
Component_zl.displayName = Component_zS.displayName;
const O6 = sc(
  "whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate ",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-xs",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-xs",
        outline: "text-foreground border [border-color:var(--badge-outline)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
function Component_xl({ className: t, variant: i, ...a }) {
  return (
    <div
      className={Xe(
        O6({
          variant: i,
        }),
        t,
      )}
      {...a}
    />
  );
}
var M6 = "Label",
  kS = React.forwardRef((t, i) => (
    <We.label
      {...t}
      ref={i}
      onMouseDown={(a) => {
        a.target.closest("button, input, select, textarea") ||
          (t.onMouseDown?.(a),
          !a.defaultPrevented && a.detail > 1 && a.preventDefault());
      }}
    />
  ));
kS.displayName = M6;
var VS = kS;
const _6 = sc(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  US = React.forwardRef(({ className: t, ...i }, a) => (
    <VS ref={a} className={Xe(_6(), t)} {...i} />
  ));
US.displayName = VS.displayName;
async function mf(t, i) {
  const a = await fetch(t, {
    headers: {
      Authorization: `Bearer ${i}`,
    },
  });
  if (a.status === 401) throw new Error("Unauthorized");
  if (!a.ok) throw new Error("Failed to fetch");
  return a.json();
}
const donationAmounts = [1e3, 2e3, 5e3, 1e4, 25e3, 5e4];
function SiteRoutes() {
  return (
    <FT>
      <Component_nn path="/" component={HomePage} />
      <Component_nn path="/original-home" component={OriginalHomePage} />
      <Component_nn path="/get-involved" component={GetInvolvedPage} />
      <Component_nn path="/donate" component={DonatePage} />
      <Component_nn path="/about" component={AboutPage} />
      <Component_nn path="/focus-areas" component={FocusAreasPage} />
      <Component_nn path="/projects" component={ProjectsPage} />
      <Component_nn path="/prison-libraries" component={PrisonLibrariesPage} />
      <Component_nn path="/current-focus" component={CurrentFocusPage} />
      <Component_nn path="/leadership" component={LeadershipPage} />
      <Component_nn path="/contact" component={ContactPage} />
      <Component_nn path="/admin" component={AdminPage} />
      <Component_nn component={ID} />
    </FT>
  );
}
function App() {
  return (
    <Component_p2 client={D2}>
      <GD>
        <Component_cC />
        <SiteRoutes />
      </GD>
    </Component_p2>
  );
}
export {
  React,
  BT,
  c,
  Fe,
  O0,
  Component_rE,
  Xe,
  $e,
  Nr,
  Or,
  dh,
  XA,
  Component_nE,
  Component_mE,
  Tf,
  R0,
  D0,
  Component_ra,
  E0,
  Component_ia,
  C0,
  Component_gb,
  yl,
  Gd,
  Component_wt,
  St,
  Component_sn,
  UA,
  Component_jr,
  ZA,
  Af,
  Xx,
  e0,
  ha,
  on,
  mh,
  Mi,
  We,
  Le,
  $0,
  Mr,
  sc,
  Hd,
  Sl,
  Component_jl,
  QA,
  Component_cE,
  FT,
  Component_nn,
  ID,
  Component_p2,
  D2,
  GD,
  Component_cC,
  xT,
  logoImage,
  Header,
  Input,
  Footer,
  PageLayout,
  Rb,
  usePageTitle,
  Ob,
  Z4,
  $4,
  rm,
  W4,
  fS,
  hS,
  n6,
  i6,
  Textarea,
  l6,
  c6,
  u6,
  d6,
  m6,
  pS,
  hf,
  p6,
  Pr,
  ih,
  gS,
  g6,
  y6,
  yS,
  Component_x6,
  v6,
  xS,
  Component_b6,
  vS,
  bS,
  w6,
  S6,
  j6,
  wS,
  N6,
  T6,
  A6,
  pc,
  E6,
  SS,
  C6,
  om,
  jS,
  NS,
  TS,
  AS,
  ES,
  CS,
  DS,
  RS,
  OS,
  D6,
  MS,
  Component__S,
  Component_zS,
  R6,
  LS,
  Component__l,
  Component_zl,
  O6,
  Component_xl,
  M6,
  kS,
  VS,
  _6,
  US,
  mf,
  donationAmounts,
  SiteRoutes,
  App,
};
