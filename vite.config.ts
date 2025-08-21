// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  // IMPORTANT for GitHub Pages project sites:
  // If you later move to a custom domain or a user site, change this to "/"
  base: "/Portfolio_Website/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // ESM-safe path to /src
    },
  },
});
