import {Locator, Page} from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    private readonly username_textbox: Locator;
    private readonly password_textbox: Locator;
    private readonly login_button: Locator;

    constructor(page: Page) {
        super(page);
        this.username_textbox = page.locator('input[name="username"]');
        this.password_textbox = page.locator('input[name="password"]');
        this.login_button = page.getByRole('button', {name: 'Login'});
    }

    login = async (username: string, password: string) => {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    };
}