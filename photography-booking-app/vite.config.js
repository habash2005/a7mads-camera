// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      styles: path.resolve(__dirname, "src/styles"), // 👈 enables `import "styles/..."` 
    },
  },
  server: {
    proxy: {
      "/.netlify/functions": {
        target: "http://localhost:8888", // netlify dev default
        changeOrigin: true,
      },
    },
  },
});
