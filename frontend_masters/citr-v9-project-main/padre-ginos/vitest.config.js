import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import react from "@vitejs/plugin-react";

export default defineConfig({
  esbuild: {
    jsx: "automatic",
  },
  test: {
    coverage: {
      provider: "istanbul",
      include: ["src/**/*.{js,jsx}"],
      exclude: ["src/__tests__/**", "src/routes/**"],
      reporter: ["text", "json", "html"],
    },
    projects: [
      {
        plugins: [react()],
        test: {
          include: ["**/*.node.test.{js,jsx}"],
          name: "happy-dom",
          environment: "happy-dom",
        },
      },
      {
        plugins: [react()],
        test: {
          include: ["**/*.browser.test.{js,jsx}"],
          name: "browser",
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
