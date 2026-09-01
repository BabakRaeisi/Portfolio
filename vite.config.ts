import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  // This hook runs after the build completes
  closeBundle: () => {
    try {
      fs.copyFileSync("dist/index.html", "dist/404.html");
      console.log("✔ Copied index.html to 404.html for GitHub Pages SPA support.");
    } catch (err) {
      console.error("❌ Failed to copy index.html to 404.html", err);
    }
  }
}));
