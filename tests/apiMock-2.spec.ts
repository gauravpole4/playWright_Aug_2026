//Changing the response from the server using route.fulfill() method in Playwright. 
// This is useful for testing how your application behaves with different API responses without actually hitting the real API.

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.route('*/**/api/articles*', async route => {

        const response = await route.fetch(); //This is used to fetch the original response  
                                              //from the server before we modify it.
        const responseBody = await response.json(); //This is used to parse the response
                                                 // body as JSON so that we can modify it.

        responseBody.articles[0].title = "Playwright API Mocking";
        responseBody.articles[0].description = "This is a mocked description for the article.";
        responseBody.articles[0].favoritesCount = 1000000000000;

        await route.fulfill({
            json: responseBody
        });
    });

    await page.goto('https://conduit.bondaracademy.com/');

})
    test('Mock Api validation', async ({ page }) => {

        // Expect a title "to contain" a substring.
        await expect(page.locator('.navbar-brand')).toHaveText('conduit');
        await expect(page.locator('.preview-link h1').nth(0)).toContainText('Playwright API Mocking');
        await expect(page.locator('.preview-link p').nth(0)).toContainText('This is a mocked description for the article.');

    

    })

