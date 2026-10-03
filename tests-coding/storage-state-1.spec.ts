import { test, expect } from "@playwright/test"

test("get StorageState", async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.getByLabel("Password").fill("secret_sauce");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/inventory\.html/);

  await page.context().storageState({
    path: "./storage.json",
  });
});