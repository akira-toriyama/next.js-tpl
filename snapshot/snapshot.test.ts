import { test, expect } from "@playwright/test";
import fetch from "sync-fetch";

const url = "http://localhost:61000";
const stories = fetch(`${url}/meta.json`).json().stories;

/**
 * https://ladle.dev/blog/visual-snapshots
 */
Object.keys(stories).forEach((storyKey) => {
  test(`${storyKey} - compare snapshots`, async ({ page }, testinfo) => {
    // https://github.com/microsoft/playwright/issues/14218#issuecomment-1128855221
    testinfo.snapshotSuffix = "";

    await page.goto(`${url}/?story=${storyKey}&mode=preview`);
    await page.waitForSelector("[data-storyloaded]");
    await expect(page).toHaveScreenshot(`${storyKey}.png`);
  });
});
