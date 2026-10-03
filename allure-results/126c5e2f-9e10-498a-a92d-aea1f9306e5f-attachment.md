# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frame-test.spec.ts >> Nested Frame!
- Location: tests\frame-test.spec.ts:11:6

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - iframe [ref=e2]:
    - generic [ref=f1e1]:
      - iframe [ref=f1e2]:
        - generic [ref=f3e1]: LEFT
      - iframe [ref=f1e3]:
        - iframe [ref=f4e2]:
          - generic [ref=f7e1]:
            - generic [ref=f7e2]:
              - generic [ref=f7e5]: Application error
              - paragraph [ref=f7e6]:
                - text: An error occurred in the application and your page could not be served. If you are the application owner,
                - link "check your logs for details" [ref=f7e7] [cursor=pointer]:
                  - /url: https://devcenter.heroku.com/articles/logging#view-logs?utm_source=error-pages&utm_content=application-error
                - text: . You can do this from the Heroku CLI with the command
                - code [ref=f7e8]: heroku logs --tail
            - link [ref=f7e15] [cursor=pointer]:
              - /url: https://devcenter.heroku.com/articles/logging#view-logs?utm_source=error-pages&utm_content=application-error
      - iframe [ref=f1e4]:
        - generic [ref=f5e1]: RIGHT
  - iframe [ref=e3]:
    - iframe [ref=f2e2]:
      - generic [ref=f6e1]:
        - generic [ref=f6e2]:
          - generic [ref=f6e5]: Application error
          - paragraph [ref=f6e6]:
            - text: An error occurred in the application and your page could not be served. If you are the application owner,
            - link "check your logs for details" [ref=f6e7] [cursor=pointer]:
              - /url: https://devcenter.heroku.com/articles/logging#view-logs?utm_source=error-pages&utm_content=application-error
            - text: . You can do this from the Heroku CLI with the command
            - code [ref=f6e8]: heroku logs --tail
        - link [ref=f6e15] [cursor=pointer]:
          - /url: https://devcenter.heroku.com/articles/logging#view-logs?utm_source=error-pages&utm_content=application-error
```