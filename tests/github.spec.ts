// tests/github.spec.ts
import { test} from '@playwright/test';
import { GitHubHomePage } from '../pages/GitHubHomePage';
import { GitHubLoginPage } from '../pages/GitHubLoginPage';

test.describe('GitHub Sign In Redirect', () => {
    test('should redirect to the login page when clicking "Sign in"', async ({ page }) => {
        const homePage = new GitHubHomePage(page);
        const loginPage = new GitHubLoginPage(page);

        // Navigate to the GitHub homepage
        await homePage.navigateToHomePage();

        // Click on the "Sign in" button
        await homePage.clickSignInButton();

        // Verify that the user is redirected to the login page
        await loginPage.verifyOnLoginPage();

        // Verify that the label "New to GitHub?" is visible
        await loginPage.verifyNewToGitHubLabel();
    });
});

// // tests/github.spec.ts
// import { test } from '@playwright/test';
// import { GitHubHomePage } from '../pages/GitHubHomePage';
// import { GitHubLoginPage } from '../pages/GitHubLoginPage';
// import { allure } from 'allure-playwright';
//
// test.describe('GitHub Sign In Redirect', () => {
//     test('should redirect to the login page when clicking "Sign in"', async ({ page }) => {
//         const homePage = new GitHubHomePage(page);
//         const loginPage = new GitHubLoginPage(page);
//
//         await allure.step('Navigate to the GitHub homepage', async () => {
//             await homePage.navigateToHomePage();
//         });
//
//         await allure.step('Click on the "Sign in" button and verify redirection', async () => {
//             await homePage.clickSignInButton();
//
//             await loginPage.verifyOnLoginPage();
//         });
//
//         await allure.step('Verify "New to GitHub?" label is visible on the login page', async () => {
//             await loginPage.verifyNewToGitHubLabel();
//         });
//     });
// });
