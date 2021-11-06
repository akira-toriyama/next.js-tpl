module.exports = {
  interactiveMessageConfig: {
    fetchMyIssuesParam: {
      owner: "akira-toriyama",
      repo: "next.js-tpl",
      state: "open",
      assignUser: "akira-toriyama",
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
