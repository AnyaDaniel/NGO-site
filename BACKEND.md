# FODADY backend and payments

The site now includes a Node.js 24 / Express 5 backend. Contacts, volunteer applications, and newsletter subscriptions are stored durably. Administrators can view them, and online donations use server-initialized Paystack checkout, server verification, and signed webhooks. Existing bank-transfer details remain unchanged.

## Local startup

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5174. Vite mounts the backend directly, so no separate development API process is required. The local database is `data/fodady.sqlite`. Node.js 24 or later is required for the built-in SQLite driver.

A private `.env` was created locally with a random `ADMIN_TOKEN`. Open `/admin` and use that value as the administrator access key. The key is never included in the frontend bundle or downloadable source archive. On a fresh checkout, copy `.env.example` to `.env` and generate a new key, for example:

```sh
node -e "console.log(require('node:crypto').randomBytes(48).toString('base64url'))"
```

Place it in `ADMIN_TOKEN`. Keep that value private. The dashboard keeps it only in browser memory, and sign-out or closing the page clears it. Rotate it by changing the server configuration and restarting. This is a single-administrator access key, not a multi-user account system.

## Activate Paystack

1. Put your own Paystack **test secret key** in `PAYSTACK_SECRET_KEY` in the server environment or private `.env`. Do not use a `VITE_` variable or paste secrets into frontend code.
2. Set `PUBLIC_ORIGIN` to the real public site origin, such as `https://fodady.org` when deploying. Development defaults to `http://127.0.0.1:5174`.
3. Restart the server and refresh `/donate`. The page identifies test mode. The donor selects an amount and purpose, enters contact information, and continues to Paystack's hosted checkout.
4. Configure this webhook URL in the Paystack dashboard: `https://YOUR_DOMAIN/api/payments/webhook`. Localhost cannot receive Paystack webhook deliveries; use the deployed test environment for this stage.
5. The callback is `https://YOUR_DOMAIN/donate`. The server supplies it when initializing checkout. The return page verifies the reference through the backend; a URL parameter or browser callback alone never marks a donation paid.
6. After successful sandbox tests and Paystack account activation, replace the server secret with the live key and restart. Live keys require an HTTPS `PUBLIC_ORIGIN`.

Until a secret key is configured, checkout stays disabled and the existing bank-transfer options remain available. No fabricated or placeholder keys are installed. No real Paystack charge has been made during development.

The donor's project/operations selection is stored as payment metadata. Paystack settlement follows the merchant account's payout settings; this does **not** automatically split or redirect gateway settlements into the two existing bank accounts. Configure Paystack settlement/subaccounts separately if that is required. The displayed bank details and transfer instructions are preserved exactly.

Official references: [Accept payments](https://paystack.com/docs/payments/accept-payments/), [Verify payments](https://paystack.com/docs/payments/verify-payments/), [Webhooks](https://paystack.com/docs/payments/webhooks/).

## Database and deployment

For production, use managed PostgreSQL by setting `DATABASE_URL`. Set `DATABASE_SSL=true` if your provider requires TLS; certificate validation remains enabled. Tables and indexes are created on startup. SQLite remains a useful local/small-site option, but requires a persistent disk and a single app instance. Switching engines does not migrate existing records automatically.

```sh
npm ci
npm run build
NODE_ENV=production HOST=0.0.0.0 npm start
```

Set these server environment values:

| Variable | Purpose |
| --- | --- |
| `PUBLIC_ORIGIN` | Canonical HTTPS site origin and Paystack callback origin |
| `ADMIN_TOKEN` | Long random administrator access key, at least 32 characters |
| `PAYSTACK_SECRET_KEY` | Server-only Paystack test or live secret |
| `DATABASE_URL` | PostgreSQL connection string; recommended for deployment |
| `DATABASE_SSL` | `true` when the PostgreSQL provider requires validated TLS |
| `SQLITE_PATH` | Explicit path on a persistent disk if using SQLite instead |
| `HOST`, `PORT` | Listen address and platform-provided port |
| `ALLOWED_ORIGINS` | Comma-separated additional trusted browser origins, if needed |
| `TRUST_PROXY` | `1` only when running behind exactly one trusted reverse proxy |

Start with 1 vCPU / 2 GB RAM for the app and a managed database; adjust to traffic. Put HTTPS in front of the app, restrict database access, and enable database backups. When using SQLite, use its backup facilities or stop the app for a consistent database backup; don't copy just a live database file while ignoring its WAL.

Production refuses to start without either `DATABASE_URL` or an explicitly configured `SQLITE_PATH`. A static-only host is no longer sufficient for forms and checkout; it must forward `/api` to this backend or run the full Node application.

## API

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Save name, email, subject, message |
| POST | `/api/volunteer` | Save first/last name, email, phone, interest, message |
| POST | `/api/newsletter` | Normalize and deduplicate newsletter email |
| GET | `/api/payments/config` | Public configured/test/live status, with no secrets |
| POST | `/api/payments/initialize` | Create hosted checkout; requires `Idempotency-Key` |
| GET | `/api/payments/verify?reference=...` | Verify and return non-personal payment status |
| POST | `/api/payments/webhook` | Process Paystack HMAC SHA-512 signed events |
| POST | `/api/admin/session` | Validate administrator Bearer access key |
| GET | `/api/admin/contacts` | Protected contact records |
| GET | `/api/admin/volunteers` | Protected volunteer records |
| GET | `/api/admin/newsletters` | Protected subscribers |
| GET | `/api/admin/donations` | Protected donation records |

Administrator endpoints require `Authorization: Bearer ADMIN_TOKEN`. The dashboard shows the latest 500 entries in each category and provides refresh and sign-out controls. Records are saved to the database; this implementation does not send contact notifications or newsletter campaigns by email.

Forms are validated and rate-limited. Mutating requests with foreign browser origins are rejected. Inputs use parameterized database queries. The gateway amount is validated server-side and converted from naira to kobo. Each checkout attempt has an idempotency key and an unpredictable reference. Verification checks the stored amount, currency, reference, and donor email. Only a verified success marks a donation paid, and paid records cannot be downgraded by a later callback. Repeated signed webhooks are idempotent. Invalid signatures are rejected against the raw request bytes.

The included rate limiter is process-local. For a horizontally scaled deployment, use a shared limiter at the reverse proxy or an external store. Runtime data is intentionally outside `public/` and `dist/`, ignored by Git, and excluded from source archives.

## Checks and limits

```sh
npm test
npm run build
```

The integration suite uses disposable SQLite databases and mocked Paystack responses. It covers persistence, duplicate subscriptions, validation, administrator access, origin checks, rate limiting, amount conversion, duplicate/concurrent checkout requests, reference/amount/currency/email mismatches, failed/pending payments, provider outages, redirect restrictions, and forged/repeated webhooks. A browser check submits a synthetic contact in a disposable database and confirms it appears after administrator sign-in.

The PostgreSQL adapter is included but has not been exercised against a live managed database here. Paystack checkout, callback, and public webhook delivery still need a sandbox run with your own test credentials before live collection is enabled.
