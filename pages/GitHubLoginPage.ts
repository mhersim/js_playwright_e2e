// pages/GitHubLoginPage.ts
import { Page, expect } from '@playwright/test';

export class GitHubLoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyNewToGitHubLabel() {
        const label = this.page.locator('xpath=//*[contains(text(),"New to GitHub?")]');
        await expect(label).toBeVisible();
    }

    async verifyOnLoginPage() {
        await expect(this.page).toHaveURL('https://github.com/login');
    }
}

// // pages/GitHubLoginPage.ts
// import { Page } from '@playwright/test';
// import { allure } from 'allure-playwright';
//
// export class GitHubLoginPage {
//     readonly page: Page;
//
//     constructor(page: Page) {
//         this.page = page;
//     }
//
//     async verifyNewToGitHubLabel() {
//         await allure.step('Verify "New to GitHub?" label is visible', async () => {
//             const label = this.page.locator('xpath=//*[contains(text(),"New to GitHub?")]');
//             await expect(label).toBeVisible();
//         });
//     }
//
//     async verifyOnLoginPage() {
//         await allure.step('Verify the URL is the GitHub login page', async () => {
//             await expect(this.page).toHaveURL('https://github.com/login');
//         });
//     }
// }
