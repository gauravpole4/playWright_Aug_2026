import { test } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({ path: `./../Test-data/.env.${process.env.envName}` });

test("env-test", async ({ page }) => {
    
  const url = process.env.URL as string
  console.log(process.env.envName);
  await page.goto(url);
});
