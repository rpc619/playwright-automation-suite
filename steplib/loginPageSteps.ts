import { expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

export class LoginPageSteps {
    private readonly page: Page;
    private readonly loginPage: LoginPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
    }

    async login(): Promise<this>  {
        await this.loginPage.login("Admin", "admin123");
        return this;
    }
    
    async verifyLogin(): Promise<this> {
        await this.page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        return this;
    }
}