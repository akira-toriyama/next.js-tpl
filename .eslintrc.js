/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "next/core-web-vitals",
    "prettier", // 最後に書く
  ],
  rules: {
    complexity: ["error", 10],
  },
  overrides: [
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
