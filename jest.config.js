const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

/** @type {import('@jest/types/build/Config').InitialOptions} */
const customJestConfig = {
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.gql.generated.ts",
    "!src/**/*.stories.tsx",
    "!src/**/index.ts",
  ],
};

module.exports = createJestConfig(customJestConfig);
