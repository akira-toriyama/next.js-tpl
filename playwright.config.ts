import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
import "~/env";

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
  reporter: [["html", { open: "never", outputFolder: "snapshotReport" }]],
};

export default config;
