import { test as base } from '@playwright/test';
import { BaseSteps } from '../steplib/baseSteps';
import { LoginPageSteps } from '../steplib/loginPageSteps';

// Declare the types of your fixtures.
type CustomFixtures = {
    baseSteps: BaseSteps;
    loginPageSteps: LoginPageSteps;
};

// Extend basic test by providing a "baseSteps" fixture.
export const test = base.extend<CustomFixtures>({
    baseSteps: async ({ page }, use) => {
        const baseSteps = new BaseSteps(page);
        await use(baseSteps);
    },
    loginPageSteps: async ({ page }, use) => {
        const baseSteps = new BaseSteps(page);
        const loginPageSteps = await baseSteps.openLoginPage();
        await use(loginPageSteps);
    }
});

export { expect } from '@playwright/test';