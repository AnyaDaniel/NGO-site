import { defineConfig } from "vite";
export default defineConfig({
  esbuild: { jsxFactory: "React.createElement", jsxFragment: "React.Fragment" },
  server: { strictPort: true },
  plugins: [
    {
      name: "fodady-backend",
      async configureServer(server) {
        const { createRuntime } = await import("./backend/runtime.mjs");
        const runtime = await createRuntime();
        server.middlewares.use(runtime.app);
        server.httpServer?.once("close", () => runtime.store.close());
      },
    },
  ],
});
