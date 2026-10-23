# FODADY — rebuilt website with forms and Paystack backend

A React website recovered from the public FODADY frontend, modernized, and connected to a Node.js 24 / Express 5 backend. Contact messages, volunteer applications, subscribers, and online donation records have durable storage and a protected admin dashboard.

## Run locally

Requires Node.js **24 or later**.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5174. Development runs the website and API together. Local storage uses SQLite in `data/fodady.sqlite`; set `DATABASE_URL` to use PostgreSQL instead.

```sh
npm test
npm run build
npm start
```

The production server defaults to http://127.0.0.1:3000. Set `HOST`, `PORT`, `PUBLIC_ORIGIN`, and persistent database configuration for deployment.

## Configuration and payment activation

Read **[BACKEND.md](BACKEND.md)** for the API, local admin access, database, Paystack sandbox/live setup, deployment, testing, and remaining external checks.

A private local `.env` contains a generated `ADMIN_TOKEN` for `/admin`. It has not been embedded in frontend code or source archives. `PAYSTACK_SECRET_KEY` is intentionally empty until the owner supplies a real server-side key. Checkout stays unavailable while that key is absent; all existing bank-transfer details remain intact. Use `.env.example` for a fresh installation and generate your own administrator key.

## Pages and navigation

`/`, `/about`, `/leadership`, `/focus-areas`, `/prison-libraries`, `/current-focus`, `/projects`, `/get-involved`, `/contact`, `/donate`, `/admin`, `/original-home`.

All pages now use `src/components/SiteHeader.jsx`: the exact shared page names appear only when the Menu button is expanded. The previously always-visible desktop navigation row has been removed. `src/navigation.js` is the single source of menu names and destinations.

The redesigned homepage contains original photos, responsive focus-area cards, GSAP reveals and photo movement, and three-year target counters. Reduced-motion settings turn off the added motion. The earlier homepage is available from **Former Home** in the shared menu and directly at `/original-home`; `preserved-home/` contains its exact pre-redesign source and stylesheet with a SHA-256 manifest.

## Source layout

- `backend/`: Express API, SQLite/PostgreSQL adapter, Paystack client, and integration tests.
- `server.mjs`: production API and static website server.
- `src/pages/`: editable React page components.
- `src/components/SiteHeader.jsx`: one navigation style for every page.
- `src/api.js`, `src/PaymentStatus.jsx`: API client and verified donation feedback.
- `src/motion.js`: GSAP motion with reduced-motion handling.
- `src/site.jsx`: shared footer, layouts, UI helpers, and route definitions.
- `src/site.css`: original production styling; modern/responsive/backend styles are in separate CSS files.
- `src/vendor/runtime.js`: recovered prebundled React/routing/component runtime, retaining license notices. Replace with normal package imports when upgrading those libraries.
- `public/assets/`: original locally saved content imagery.

## Recovery history

The initial recovery used publicly served JavaScript, CSS, HTML and sixteen image assets from https://fodady.org. The original source-map URL returned HTML, so the original AI-builder repository and server code were not available. Rendering code was converted into editable JSX and separated into page files. The current backend is newly written; no original private server code, secrets, or stored user records were recovered.

The initial About-page recovery matched the live desktop and mobile screenshots. The main homepage was then intentionally redesigned. Inner page content and original bank details are retained, with responsive/readability improvements. Google Fonts is still an external dependency.

## Verification

Backend integration tests use disposable SQLite databases and mocked Paystack responses; no real charge was made. They cover successful and rejected forms, admin protection, provider errors, validation, idempotency, verification mismatches, and signed/forged/repeated webhooks. A browser check also saved a synthetic contact in a disposable database and confirmed it appeared after admin sign-in.

The original responsive review covered twelve pages at 320, 390, 768 and 1280 px. The shared-menu/backend changes are checked again on the changed pages. Production builds pass. A live PostgreSQL connection and real Paystack sandbox credentials are still required for external integration validation before collecting live payments.
