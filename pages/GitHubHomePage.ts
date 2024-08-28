// pages/GitHubHomePage.ts
import { Page } from '@playwright/test';

export class GitHubHomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto('/');
    }

    async clickSignInButton() {
        await this.page.click('(//*[contains(text(),"Sign in")])[2]');
    }
}

// // pages/GitHubHomePage.ts
// import { Page } from '@playwright/test';
// import { allure } from 'allure-playwright';
//
// export class GitHubHomePage {
//     readonly page: Page;
//
//     constructor(page: Page) {
//         this.page = page;
//     }
//
//     async navigateToHomePage() {
//         await allure.step('Navigate to GitHub homepage', async () => {
//             await this.page.goto('/');
//         });
//     }
//
//     async clickSignInButton() {
//         await allure.step('Click on the "Sign in" button', async () => {
//             await this.page.click('xpath=//*[contains(text(),"Sign in")]');
//         });
//     }
// }
