import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  reporter: [["html", { open: "never", outputFolder: "snapshotReport" }]],
};
export default config;
