import { test } from "@playwright/test";

test("env-check", async ({ page }) => {
  const URL = process.env.URL;
  console.log(URL);

  const CRED = process.env.CRED;
  console.log(CRED);
});
