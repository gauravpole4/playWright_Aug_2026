import { request } from "@playwright/test";
import {test, expect} from './api-fixture-token.spec.js'
let token;
test("api-request", async ({  request, token }) => {
  
    

  const newResp = await request.post(
    "https://conduit-api.bondaracademy.com/api/articles/",
    {
      data: {
        article: {
          title: "FromFixture1212",
          description: "a",
          body: "a",
          tagList: [],
        }},
        headers: {
          Authorization: `Token ${token}`,
        },
      }

  );

  ///expect(newResp.status()).toEqual(201);
});
