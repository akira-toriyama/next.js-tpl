const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

/** @type {import('@jest/types/build/Config').InitialOptions} */
const customJestConfig = {
  ...require("@bird-studio/js-config").jestConfig.nextJs,
};

module.exports = createJestConfig(customJestConfig);
