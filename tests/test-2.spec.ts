import { test } from "./../tests-coding/api-fixture-token.spec";

test.only("test", async ({ username, email }) => {
  const uniqueUser = {
    name: `${username}`,
    email: `${email}@example.com`,
  };

  console.log(uniqueUser);
});
