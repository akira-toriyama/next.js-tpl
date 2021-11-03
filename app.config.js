"use strict";

module.exports = {
  appConfig: [
    {
      value: "feat",
      description: "Introducing new features",
      release: "minor",
    },
    { value: "fix", description: "Fixing a bug", release: "patch" },
    {
      value: "refactor",
      description: "Refactoring code (Not Introducing features or fix)",
      release: "patch",
    },
    { value: "docs", description: "add documents", release: false },
    {
      value: "test",
      description: "Adding unit tests or e2e test",
      release: false,
    },
    { value: "perf", description: "Improving performance", release: "patch" },
    {
      value: "style",
      description: "Updating the UI and style files",
      release: "patch",
    },
    { value: "build", description: "build artifacts", release: false },
    {
      value: "ci",
      description: "working about CI build system",
      release: false,
    },
    { value: "wip", description: "Work in progress", release: false },
    {
      value: "chore",
      description: "Work with configuration or other stuff",
      release: false,
    },
  ],
};
