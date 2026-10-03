//Using post request we can create a new article in the application. 
// This test will send a POST request to the API endpoint responsible for creating articles and 
// verify that the article was created successfully.

import { test, expect } from '@playwright/test';

test('Create a new article', async ({ page, request }) => {


    const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {

        data: {

            "user": {
                "email": "dfsfsdf@fsdfsdf.com",
                "password": "Test@123"
            }
        }
    })

    const responseJson = await response.json();
    const token = responseJson.user.token;
    console.log(token);
    expect(response.status()).toEqual(200);


    const articleAddResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles', {

        data:
        {
            "article": {
                "title": "Playwright test TITLE!!!",
                "description": "PlayRight Test description",
                "body": "test body",

            }
        }
        , headers: {
            authorization: `Token ${token}`
        }

    })
    expect(articleAddResponse.status()).toEqual(201);

    //to delete the article we just created, we need to get the slug of the article from the response of the create article request.

    await page.goto('https://conduit.bondaracademy.com/');
    await page.getByText('Sign in').click();
    await page.getByPlaceholder('Email').fill('dfsfsdf@fsdfsdf.com');
    await page.getByPlaceholder('Password').fill('Test@123');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.locator('.preview-link h1').nth(0)).toContainText('Playwright test TITLE!!!');

    await page.getByText('Playwright test TITLE!!!', { exact: true }).click();
    await page.locator('button').filter({ hasText: 'Delete Article' }).first().click()

    await page.waitForResponse('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0')
        await expect(page.locator('.preview-link h1').nth(0)).not.toContainText('Playwright test TITLE!!!');


})







