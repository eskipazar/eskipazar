import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist", // Specify the output directory for the production build
    sourcemap: true, // Generate sourcemaps for debugging
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
});
