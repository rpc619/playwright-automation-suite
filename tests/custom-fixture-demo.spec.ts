import { test, expect } from '../fixtures/customFixture';

test.describe('Custom Fixture Demo', () => {
    test('should login successfully using custom fixtures @customFixture', async ({ loginPageSteps }) => {
        await loginPageSteps.login();
        await loginPageSteps.verifyLogin();
    });
});