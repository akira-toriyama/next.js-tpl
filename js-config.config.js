const { git } = require("@bird-studio/interactive-message").plugin;

const repo = git.getRepo();
const owner = git.getOwner();

module.exports = {
  interactiveMessageConfig: {
    fetchMyIssuesParam: {
      owner,
      repo,
      state: "open",
      assignUser: owner,
    },
    scope: [
      ...require("fs")
        .readdirSync("./src")
        .map((v) => ({
          description: v,
          value: v,
        })),
      { description: "other: Other directory", value: "other" },
    ],
  },
};
