import { test } from '@playwright/test';
import { BaseSteps } from '../steplib/baseSteps';

// let context;
// let page;

/*test.beforeAll(async ({browser}) => {
    context = await browser.newContext();
    /!*await context.tracing.start({
        snapshots: true,
        screenshots: true
    });*!/

    page = await context.newPage();
});

test.afterAll(async ({page}) => {
    // await context.tracing.stop({path: 'login_test_trace.zip'});
    await page.close();
});*/

test.describe('My Test Suite', async () => {
    test('Login Test', async ({ page }) => {
        const loginPageSteps = await new BaseSteps(page).openLoginPage();
        await loginPageSteps.login();
        await loginPageSteps.verifyLogin();
    });
});