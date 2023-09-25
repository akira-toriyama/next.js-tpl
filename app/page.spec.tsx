import { test, expect } from "@playwright/test";

test("go to /items page", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("items").first().click();
  await expect(page).toHaveURL("/items");
});
