import {expect, test} from '@playwright/test';
import {LoginPage} from "../pages/loginPage";

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
    test('Login Test', async ({page}) => {
        const loginPage: LoginPage = new LoginPage(page);
        await loginPage.openLoginPage("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await loginPage.login("Admin", "admin123");

        expect(page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'));

        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });
});