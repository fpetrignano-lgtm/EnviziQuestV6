import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reportRefreshPlugin } from "./vite-plugin-report-refresh";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/EnviziQuestV6/" : "/",
  server: { port: 5176, strictPort: true },
  plugins: [react(), reportRefreshPlugin()],
  build: {
    chunkSizeWarningLimit: 1500,
    assetsInlineLimit: 65536,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          pptx: ["pptxgenjs"],
        },
      },
    },
  },
}));
