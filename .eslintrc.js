/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@bird-studio/eslint-config/preset/nextJs"],
  overrides: [
    {
      files: ["src/domain/**/*"],
      rules: {
        "import/no-restricted-paths": [
          "error",
          {
            zones: [
              {
                target: "**/*",
                from: "node_modules/",
                message: "Do not rely on libraries",
              },
            ],
          },
        ],
      },
    },
    {
      files: ["src/useCase/**/*"],
      rules: {
        "import/no-restricted-paths": [
          "error",
          {
            zones: [
              {
                target: "**/*",
                from: "node_modules/",
                except: ["ts-pattern"],
                message: "Do not rely on libraries",
              },
            ],
          },
        ],
      },
    },
    {
      files: ["src/infra/**/*"],
      rules: {
        "import/no-restricted-paths": [
          "error",
          {
            zones: [
              {
                target: "**/*",
                from: "node_modules/",
                message: "Do not rely on libraries",
              },
            ],
          },
        ],
      },
    },
    {
      files: ["src/ui/**/*.tsx"],
      rules: {
        "import/no-restricted-paths": [
          "error",
          {
            zones: [
              {
                target: "**/*",
                from: "node_modules/",
                except: ["react", "ts-pattern"],
              },
            ],
          },
        ],
      },
    },
    {
      files: ["src/ui/**/*.test.tsx"],
      rules: {
        "import/no-restricted-paths": [
          "error",
          {
            zones: [
              {
                target: "**/*",
                from: "node_modules/",
                except: ["@testing-library/react"],
              },
            ],
          },
        ],
      },
    },
    {
      files: ["src/ui/**/*.stories.tsx"],
      rules: {
        "import/no-restricted-paths": [
          "error",
          {
            zones: [
              {
                target: "**/*",
                from: "node_modules/",
                except: ["@ladle/react"],
              },
            ],
          },
        ],
      },
    },
  ],
};
