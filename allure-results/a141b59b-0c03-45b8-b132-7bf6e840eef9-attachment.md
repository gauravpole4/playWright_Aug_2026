# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-2.spec.ts >> test
- Location: tests\test-2.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Email:' })
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - img "Icon for admin-demo.nopcommerce.com" [ref=e5]
        - heading "admin-demo.nopcommerce.com" [level=1] [ref=e6]
      - heading "Performing security verification" [level=2] [ref=e7]
      - paragraph [ref=e8]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e13]:
    - generic [ref=e15]:
      - generic [ref=e17]:
        - text: "Ray ID:"
        - code [ref=e18]: a3f2e1d48f523b28
      - generic [ref=e19]:
        - generic [ref=e20]:
          - text: Performance and Security by
          - link "Cloudflare, opens in a new tab" [ref=e21] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
            - text: Cloudflare
        - link "Privacy, opens in a new tab" [ref=e23] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
          - text: Privacy
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("test", async ({ page }) => {
  4  |   await page.goto("https://admin-demo.nopcommerce.com/login");
  5  |   await page
  6  |     .getByRole("textbox", { name: "Email:" })
> 7  |     .fill("admin@yourstore.com");
     |      ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  8  |   await page.getByLabel("Password:").fill("admin");
  9  |   await page.getByRole("button").click();
  10 | });
  11 | 
```