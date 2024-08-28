// import { test, expect } from '@playwright/test';
//
// test.describe('GitHub Sign In Redirect', () => {
//     test('should redirect to the login page when clicking "Sign in"', async ({ page }) => {
//         // Open the GitHub homepage
//         await page.goto('/');
//
//         // Click on the "Sign in" button using XPath
//         await page.click('(//*[contains(text(),"Sign in")])[2]');
//
//         // Expect the page to be redirected to the login page
//         await expect(page).toHaveURL('https://github.com/login');
//
//         // Verify that the label "New to GitHub?" is present on the login page using XPath
//         const label = page.locator('xpath=//*[contains(text(),"New to GitHub?")]');
//         await expect(label).toBeVisible();
//     });
// });
