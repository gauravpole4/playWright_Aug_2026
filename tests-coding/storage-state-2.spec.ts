import { test, expect } from "@playwright/test";

test.use({
  storageState: "./storage.json",
});

test("inventory page", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");

  await expect(page.locator(".title")).toHaveText("Products");
});