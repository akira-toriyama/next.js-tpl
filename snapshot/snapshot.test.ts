import { test, expect } from "@playwright/test";
import fetch from "sync-fetch";

const url = "http://localhost:61000";
const stories = fetch(`${url}/meta.json`).json().stories;

Object.keys(stories).forEach((storyKey) => {
  test(`${storyKey} - compare snapshots`, async ({ page }) => {
    await page.goto(`${url}/?story=${storyKey}&mode=preview`);
    await page.waitForSelector("[data-storyloaded]");
    await expect(page).toHaveScreenshot(`${storyKey}.png`);
  });
});
