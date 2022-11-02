/** @type {import('eslint').Linter.Config} */
module.exports = {
  reportUnusedDisableDirectives: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: ["use-encapsulation", "vitest"],
  rules: {
    complexity: ["error", 2],
  },
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "use-encapsulation/prefer-custom-hooks": ["error"],
      },
    },
    {
      files: ["*.stories.tsx"],
      rules: {
        "use-encapsulation/prefer-custom-hooks": ["off"],
      },
    },
    {
      files: [".eslintrc.js", "*.config.js"],
      rules: {
        "no-undef": "off",
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.test.ts"],
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
      },
    },
  ],
};
