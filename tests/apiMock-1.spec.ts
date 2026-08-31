//Directly changing the response of the API call using route.fulfill() method in Playwright.
//  This is useful for testing how your application behaves with different API responses without actually hitting the real API.

import { test, expect } from '@playwright/test';
import tags from '../Test-data/tags.json';

test.beforeEach(async ({ page }) => {


    await page.route('*/**/api/tags', async route => {
        await route.fulfill({

            json: tags
        });

    });

            await page.goto('https://conduit.bondaracademy.com/');


});


test('has title', async ({ page }) => {

    // Expect a title "to contain" a substring.
    await expect(page.locator('.navbar-brand')).toHaveText('conduit');

    await expect(page.locator('.tag-list .tag-pill')).toContainText(["Test",
        "API",
        "Playwright"])
});




