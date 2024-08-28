import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: true,
        baseURL: 'https://github.com/',
    },
    retries: 2, // Retry on failure
});


//
// import { defineConfig } from '@playwright/test';
//
// export default defineConfig({
//     use: {
//         headless: true,
//         baseURL: 'https://github.com/',
//         trace: 'on', // Optional: Enables Playwright tracing
//     },
//     reporter: [
//         ['dot'], // You can keep the default dot reporter or replace it with 'list', 'json', etc.
//         ['allure-playwright', { outputFolder: 'allure-results' }]
//     ],
//     retries: 2, // Optional: Retry on failure
// });

