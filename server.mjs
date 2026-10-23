import express from "express";
import { resolve } from "node:path";
import { createRuntime } from "./backend/runtime.mjs";
const { app, store } = await createRuntime();
app.use(express.static(resolve("dist"), { index: false }));
app.get("/{*path}", (_req, res) => res.sendFile(resolve("dist/index.html")));
const server = app.listen(
  Number(process.env.PORT || 3000),
  process.env.HOST || "127.0.0.1",
  () => console.log("FODADY backend and website ready."),
);
for (const signal of ["SIGINT", "SIGTERM"])
  process.once(signal, () => {
    server.close(async () => {
      await store.close();
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 10000).unref();
  });
