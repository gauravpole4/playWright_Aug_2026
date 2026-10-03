import { test, expect } from "@playwright/test";

test("FrameTest", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/iframe");

  await expect(page.frameLocator("#mce_0_ifr").locator("#tinymce")).toHaveText(
    "Your content goes here.",
  );
});

test("Nested Frame!", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/nested_frames");

  const parentFrame1 = page.frame({ name: "frame-top" })
  const totalFrame = parentFrame1?.childFrames();

const childFrame = parentFrame1?.childFrames()[0];

if (childFrame) {
    const text = await childFrame.locator('body').innerText();
    console.log(text)
}

})