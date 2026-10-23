import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { openStore } from "./store.mjs";
import { createPaystack } from "./paystack.mjs";
import { createApp } from "./app.mjs";
export async function createRuntime() {
  if (existsSync(resolve(".env"))) process.loadEnvFile(resolve(".env"));
  const publicOrigin = new URL(
    process.env.PUBLIC_ORIGIN || "http://127.0.0.1:5174",
  ).origin;
  if (
    process.env.NODE_ENV === "production" &&
    !process.env.DATABASE_URL &&
    !process.env.SQLITE_PATH
  )
    throw new Error(
      "Configure DATABASE_URL or an explicit persistent SQLITE_PATH for production.",
    );
  if (
    process.env.PAYSTACK_SECRET_KEY?.startsWith("sk_live_") &&
    !publicOrigin.startsWith("https://")
  )
    throw new Error("Live payments require an HTTPS PUBLIC_ORIGIN.");
  const store = await openStore({
    databaseUrl: process.env.DATABASE_URL,
    sqlitePath: process.env.SQLITE_PATH || "data/fodady.sqlite",
    ssl: process.env.DATABASE_SSL === "true",
  });
  const paystack = createPaystack(process.env.PAYSTACK_SECRET_KEY || "");
  const app = createApp({
    store,
    paystack,
    adminToken: process.env.ADMIN_TOKEN || "",
    publicOrigin,
    allowedOrigins: [
      publicOrigin,
      ...(process.env.ALLOWED_ORIGINS || "").split(",").filter(Boolean),
    ],
    trustProxy: process.env.TRUST_PROXY === "1",
  });
  return { app, store };
}
