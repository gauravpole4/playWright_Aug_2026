import { test as base, Page } from '@playwright/test';

type Fixtures = {
loggedInPage: Page;
};

export const test = base.extend<Fixtures>({

loggedInPage: async ({page} , use) => {
  page.goto("https://www.saucedemo.com/");

  await page.getByRole("textbox", { name: "Username" }).fill("problem_user");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");

  await page.getByRole("button").click();

  await use(page)
}})
;
