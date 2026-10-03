import { test as base, request, expect } from "@playwright/test";
import { randomUUID } from "crypto";

type Fixtures = {
  token: string;
  username: string;
  email: string;
};

export const test = base.extend<Fixtures>({
  token: async ({ request }, use) => {
    const response = await request.post(
      "https://conduit-api.bondaracademy.com/api/users/login",
      {
        data: {
          user: {
            email: "dfsfsdf@fsdfsdf.com",
            password: "Test@123",
          },
        },
      },
    );

    expect(response.status()).toEqual(200);
    const body = await response.json();
    const token = body.user.token;
    console.log(token);

    await use(token);
  },

  username: `TestUser_${randomUUID()}`,
  email: `test_${randomUUID()}@example.com`,
});

export { expect };
