import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { randomUUID } from "node:crypto";

export async function openStore({
  databaseUrl,
  sqlitePath = "data/fodady.sqlite",
  ssl = false,
} = {}) {
  let query, close;
  if (databaseUrl) {
    const { Pool } = await import("pg");
    const pool = new Pool({
      connectionString: databaseUrl,
      max: 10,
      ssl: ssl ? { rejectUnauthorized: true } : undefined,
    });
    query = async (sql, args = []) => (await pool.query(sql, args)).rows;
    close = () => pool.end();
  } else {
    const { DatabaseSync } = await import("node:sqlite");
    if (sqlitePath !== ":memory:")
      await mkdir(dirname(resolve(sqlitePath)), {
        recursive: true,
        mode: 0o700,
      });
    const db = new DatabaseSync(sqlitePath);
    db.exec(
      "PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000; PRAGMA foreign_keys=ON;",
    );
    query = async (sql, args = []) => {
      const statement = db.prepare(sql.replace(/\$\d+/g, "?"));
      return /^(SELECT|INSERT.*RETURNING|UPDATE.*RETURNING)/is.test(sql.trim())
        ? statement.all(...args)
        : (statement.run(...args), []);
    };
    close = async () => db.close();
  }
  await query(`CREATE TABLE IF NOT EXISTS submissions (
    id TEXT PRIMARY KEY, kind TEXT NOT NULL CHECK(kind IN ('contact','volunteer','newsletter')),
    email TEXT NOT NULL, payload TEXT NOT NULL, created_at TEXT NOT NULL
  )`);
  await query(
    "CREATE UNIQUE INDEX IF NOT EXISTS newsletter_email_unique ON submissions(email) WHERE kind='newsletter'",
  );
  await query(`CREATE TABLE IF NOT EXISTS donations (
    reference TEXT PRIMARY KEY, idempotency_key TEXT NOT NULL UNIQUE, fingerprint TEXT NOT NULL,
    amount INTEGER NOT NULL CHECK(amount>=10000), currency TEXT NOT NULL, email TEXT NOT NULL,
    name TEXT NOT NULL, phone TEXT NOT NULL, purpose TEXT NOT NULL,
    status TEXT NOT NULL, authorization_url TEXT, provider_id TEXT, paid_at TEXT, created_at TEXT NOT NULL
  )`);
  await query(
    "CREATE INDEX IF NOT EXISTS submissions_kind_date ON submissions(kind,created_at)",
  );
  const first = async (sql, args) => (await query(sql, args))[0];
  return {
    engine: databaseUrl ? "postgresql" : "sqlite",
    close,
    async saveSubmission(kind, data) {
      const id = randomUUID(),
        createdAt = new Date().toISOString();
      try {
        await query(
          "INSERT INTO submissions(id,kind,email,payload,created_at) VALUES($1,$2,$3,$4,$5)",
          [id, kind, data.email, JSON.stringify(data), createdAt],
        );
      } catch (error) {
        if (
          kind === "newsletter" &&
          (error.code === "23505" ||
            String(error.message).includes("UNIQUE constraint"))
        )
          return { duplicate: true };
        throw error;
      }
      return { id, createdAt };
    },
    async submissions(kind, limit = 500) {
      return (
        await query(
          "SELECT id,payload,created_at FROM submissions WHERE kind=$1 ORDER BY created_at DESC LIMIT $2",
          [kind, limit],
        )
      ).map((row) => ({
        ...JSON.parse(row.payload),
        id: row.id,
        createdAt: row.created_at,
      }));
    },
    async createDonation(data) {
      const createdAt = new Date().toISOString();
      await query(
        "INSERT INTO donations(reference,idempotency_key,fingerprint,amount,currency,email,name,phone,purpose,status,created_at) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",
        [
          data.reference,
          data.key,
          data.fingerprint,
          data.amount,
          "NGN",
          data.email,
          data.name,
          data.phone,
          data.purpose,
          "initializing",
          createdAt,
        ],
      );
      return first("SELECT * FROM donations WHERE reference=$1", [
        data.reference,
      ]);
    },
    donation: (reference) =>
      first("SELECT * FROM donations WHERE reference=$1", [reference]),
    donationByKey: (key) =>
      first("SELECT * FROM donations WHERE idempotency_key=$1", [key]),
    initialized: (reference, url) =>
      query(
        "UPDATE donations SET authorization_url=$1,status='pending' WHERE reference=$2 AND status='initializing'",
        [url, reference],
      ),
    initializationFailed: (reference) =>
      query(
        "UPDATE donations SET status='initialization_failed' WHERE reference=$1 AND status='initializing'",
        [reference],
      ),
    paymentStatus: (reference, status) =>
      query(
        "UPDATE donations SET status=$1 WHERE reference=$2 AND status<>'success'",
        [status, reference],
      ),
    async paid(reference, data) {
      await query(
        "UPDATE donations SET status='success',provider_id=$1,paid_at=$2 WHERE reference=$3 AND status<>'success'",
        [String(data.id), data.paid_at || new Date().toISOString(), reference],
      );
    },
    async donations(limit = 500) {
      return (
        await query(
          "SELECT reference,amount,currency,email,name,phone,purpose,status,paid_at,created_at FROM donations ORDER BY created_at DESC LIMIT $1",
          [limit],
        )
      ).map((row) => ({
        ...row,
        createdAt: row.created_at,
        paidAt: row.paid_at,
      }));
    },
  };
}
