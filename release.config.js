"use strict";

const { appConfig } = require("./app.config");

module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: appConfig.map((v) => ({
          type: v.value,
          release: v.release,
        })),
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: appConfig.map((v) => ({
            type: v.value,
            section: v.value,
            hidden: false,
          })),
        },
      },
    ],
    "@semantic-release/github",
    "@semantic-release/git",
  ],
};
