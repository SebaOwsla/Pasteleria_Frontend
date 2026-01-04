import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Pasteleria_Frontend/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
