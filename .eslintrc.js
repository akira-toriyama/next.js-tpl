/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@bird-studio/eslint-config/preset/standard",
    "next/core-web-vitals",
  ],
  plugins: ["use-encapsulation"],
  rules: {
    "use-encapsulation/prefer-custom-hooks": ["error"],
  },
};
