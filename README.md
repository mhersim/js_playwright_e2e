# Playwright E2E Testing Framework

This repository contains a Playwright framework for end-to-end (E2E) testing. The framework uses the Page Object Model (POM) pattern to ensure maintainable and scalable test automation.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)

## Project Setup

1. **Install Playwright:**

   First, install the Playwright library in your project:

   ```bash
   npm install playwright

2. **Install Browsers:**

   Playwright requires browser binaries to run the tests. Install them using:
   
   ```bash
   npx playwright install
   npx playwright install msedge


3. **Running Tests**

   Run Tests in Headless Mode:

   Execute the tests in headless mode (without a UI) using the following command:

   ```bash
   npx playwright test

4. **Run Tests in Headed Mode:**

   To run the tests in headed mode (with a UI visible), use the --headed flag:
   
   ```bash
   npx playwright test --headed

5. **Install Allure Reporter for Playwright.**

   ```bash
   npm install -D allure-playwright allure-commandline


- Running Tests with Allure => allure-results
npx playwright test
- Generating the Allure Report 
npx allure generate allure-results --clean -o allure-report
- Viewing the Allure Report
npx allure open allure-report


npm install --save-dev allure-commandline
npm install --save-dev allure-playwright

