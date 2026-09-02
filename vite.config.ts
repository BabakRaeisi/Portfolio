import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/Portfolio/" : "/",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean,
  ),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  closeBundle: () => {
    try {
      fs.copyFileSync("dist/index.html", "dist/404.html");
      console.log("Copied index.html to 404.html for SPA routing.");
    } catch (error) {
      console.error("Failed to create 404.html:", error);
    }
  },
}));
