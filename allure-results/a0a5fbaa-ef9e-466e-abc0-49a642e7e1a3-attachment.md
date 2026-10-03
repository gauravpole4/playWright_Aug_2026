# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frame-test.spec.ts >> FrameTest
- Location: tests\frame-test.spec.ts:3:5

# Error details

```
Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
Call log:
  - waiting for locator('#mce_0_ifr').contentFrame().locator('#tinymce')
    - locator resolved to <body id="tinymce" data-id="mce_0" spellcheck="false" contenteditable="false" class="mce-content-body mce-content-readonly" aria-label="Rich Text Area. Press ALT-0 for help.">…</body>
    - fill("In the main content!!!!")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [active] [ref=f9e1]:
  - generic [ref=f9e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=f9e5] [cursor=pointer]
    - generic [ref=f9e7]:
      - heading "An iFrame containing the TinyMCE WYSIWYG Editor" [level=3] [ref=f9e8]
      - application [disabled] [ref=f9e9]:
        - generic [ref=f9e10]:
          - generic [ref=f9e11]:
            - menubar [disabled] [ref=f9e12]:
              - menuitem "File" [disabled] [ref=f9e13]
              - menuitem "Edit" [disabled] [ref=f9e15]
              - menuitem "View" [disabled] [ref=f9e17]
              - menuitem "Format" [disabled] [ref=f9e19]
            - group [disabled] [ref=f9e21]:
              - group [disabled] [ref=f9e22]:
                - toolbar "history" [disabled] [ref=f9e23]:
                  - button "Undo" [disabled] [ref=f9e24]
                  - button "Redo" [disabled] [ref=f9e28]
                - toolbar "styles" [disabled] [ref=f9e32]:
                  - button "Formats" [disabled] [ref=f9e33]:
                    - generic [ref=f9e34]: Paragraph
                - toolbar "formatting" [disabled] [ref=f9e38]:
                  - button "Bold" [disabled] [ref=f9e39]
                  - button "Italic" [disabled] [ref=f9e43]
                - toolbar "alignment" [disabled] [ref=f9e47]:
                  - button "Align left" [disabled] [ref=f9e48]
                  - button "Align center" [disabled] [ref=f9e52]
                  - button "Align right" [disabled] [ref=f9e56]
                  - button "Justify" [disabled] [ref=f9e60]
                - toolbar "indentation" [disabled] [ref=f9e64]:
                  - button "Decrease indent" [disabled] [ref=f9e65]
                  - button "Increase indent" [disabled] [ref=f9e69]
          - generic [ref=f9e73]:
            - iframe [ref=f9e75]:
              - generic "Rich Text Area. Press ALT-0 for help." [ref=f10e1]:
                - paragraph [ref=f10e2]: Your content goes here.
            - complementary
        - generic [ref=f9e76]:
          - generic [ref=f9e77]:
            - navigation [ref=f9e78]
            - link "Powered by Tiny" [disabled] [ref=f9e80]:
              - /url: https://www.tiny.cloud/?utm_campaign=editor_referral&utm_medium=poweredby&utm_source=tinymce&utm_content=v5
          - generic "Resize" [ref=f9e81]
  - generic [ref=f9e86]:
    - separator [ref=f9e87]
    - generic [ref=f9e88]:
      - text: Powered by
      - link "Elemental Selenium" [ref=f9e89] [cursor=pointer]:
        - /url: http://elementalselenium.com/
  - alert [ref=f9e91]:
    - paragraph [ref=f9e96]:
      - generic [ref=f9e97]: TinyMCE is in read-only mode because you have no more editor loads available this month.
      - generic [ref=f9e98]:
        - strong [ref=f9e99]: Please request that the admin
        - text: upgrade your plan or add a valid payment method for additional editor load charges.
        - link "Learn more." [ref=f9e100] [cursor=pointer]:
          - /url: https://www.tiny.cloud/docs/tinymce/latest/usage-based-billing/?utm_campaign=editor_blocked_learn_more&utm_source=tiny&utm_medium=referral
    - button "Close" [ref=f9e101] [cursor=pointer]
```

# Test source

```ts
  1  | import { expect, test } from "@playwright/test";
  2  | 
  3  | test("FrameTest", async ({ page }) => {
  4  |   await page.goto("https://the-internet.herokuapp.com/iframe");
  5  | 
  6  |   const parentFrame = page.frameLocator("#mce_0_ifr")
  7  | 
  8  |   const childFrame = parentFrame.locator("#tinymce")
  9  | 
> 10 |   await childFrame.fill("In the main content!!!!");
     |                    ^ Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
  11 | 
  12 |   await page.waitForTimeout(5000);
  13 | });
  14 | 
```