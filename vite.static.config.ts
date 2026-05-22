import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/mindscape-canvas-58/",
  root: "static",
  publicDir: "../public",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "../dist/client",
    emptyOutDir: true,
  },
});
