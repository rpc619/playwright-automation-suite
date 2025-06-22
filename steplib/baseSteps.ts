import {Page} from "@playwright/test";
import { LoginPageSteps } from "./loginPageSteps";

export class BaseSteps {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openLoginPage(): Promise<LoginPageSteps> {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        return new LoginPageSteps(this.page);
    }
}