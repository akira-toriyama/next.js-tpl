/// <reference types="vitest" />
import { configDefaults, defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
  /**
   * https://github.com/tajo/ladle/issues/100#issuecomment-1192413254
   */
  define: {
    "process.env": process.env,
  },
  // @ts-expect-error -- ???
  plugins: [react({ fastRefresh: false })],
  test: {
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "snapshot/snapshot.test.ts"],
    coverage: {
      all: true,
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "**/*.stories.tsx",
        "**/*.gql.generated.ts",
        "**/*.gql.ts",
        "src/infra/graphql/types.ts",
        "src/ui/provider/Wrapper.tsx",
        "src/ui/provider/ReactQuery.tsx",
        "src/ui/provider/ErrorBoundary.tsx",
        "src/env.ts",
        "src/mock/**",
        "src/ui/util/graphql/mutations.ts",
        "src/ui/util/graphql/queries.ts",
      ],
      provider: "istanbul",
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
      thresholdAutoUpdate: true,
    },
    setupFiles: ["./vitestSetup.ts"],
  },
  resolve: {
    alias: {
      "~": path.join(__dirname, "./src"),
    },
  },
  server: {
    /**
     * https://github.com/tajo/ladle/blob/main/e2e/playwright/vite.config.ts
     */
    open: "none",
  },

  preview: {
    /**
     * https://github.com/tajo/ladle/blob/main/e2e/playwright/vite.config.ts
     */
    open: "none",
  },
});
