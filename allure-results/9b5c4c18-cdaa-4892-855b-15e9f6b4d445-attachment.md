# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frame-test.spec.ts >> Nested Frame!
- Location: tests\frame-test.spec.ts:11:6

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://the-internet.herokuapp.com/nested_frames", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("FrameTest", async ({ page }) => {
  4  |   await page.goto("https://the-internet.herokuapp.com/iframe");
  5  | 
  6  |   await expect(page.frameLocator("#mce_0_ifr").locator("#tinymce")).toHaveText(
  7  |     "Your content goes here.",
  8  |   );
  9  | });
  10 | 
  11 | test.only("Nested Frame!", async ({ page }) => {
> 12 |   await page.goto("https://the-internet.herokuapp.com/nested_frames");
     |              ^ Error: page.goto: Target page, context or browser has been closed
  13 | 
  14 |   const parentFrame1 = page.frame({ name: "frame-top" })
  15 |   const totalFrame = parentFrame1?.childFrames();
  16 | 
  17 | const childFrame = parentFrame1?.childFrames()[0];
  18 | 
  19 | if (childFrame) {
  20 |     const text = await childFrame.locator('body').innerText();
  21 |     console.log(text)
  22 | }
  23 | 
  24 | })
```