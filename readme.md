# Install and setup Playwright:
`npm init playwright@latest`

# Command to open code generator:

`npx playwright codegen`

### See available options with codegen:

`npx playwright codegen --help`

### Open codegen in different browser:

`npx playwright codegen --browser firefox`

# Command to run a single test file:

`npx playwright test .\tests\demo1.spec.ts --project chromium --headed`

### Run a test with tag:
`npx playwright test --grep "@smoke"`

### Run tests which are not having tag:
`npx playwright test --grep-invert "@smoke"`

# To open last HTML report run:

`npx playwright show-report`

# To open trace viewer:
`npx playwright show-trace .\test-results\demo1-Login-Test-chromium-retry1\trace.zip`

# To set trace ON from command:
`npx playwright test --trace on`

# To open trace using Playwright utility:
Go to https://trace.playwright.dev/ 

# Open Playwright Inspector programmatically:
`page.pause()`

# Selectors:
## Using any object property:
* `await page.locator('id=user-name').click();`
* `await page.locator('[id="user-name"]').click();`

## Using CSS selectors:
* `await page.locator('#user-name').click();`

## Using XPath:
* `await page.locator('xpath=//[@id="user-name"]').click();`
* `await page.locator('//[@id="user-name"]').click();`

## Using text:
* `await page.locator('text=LOGIN').click();`
* `await page.locator(':has-text("LOGIN")').click();`
* `await page.locator('input:has-text("LOGIN")').click();`