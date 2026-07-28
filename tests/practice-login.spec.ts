import { test, expect, type Page } from '@playwright/test';

const baseUrl = 'https://practicetestautomation.com/practice-test-login/';

// Human-friendly locators with CSS equivalents for manual testers
const locators = {
  usernameField: '#username', // CSS: input#username
  passwordField: '#password', // CSS: input[type="password"]#password
  submitButton: '#submit', // CSS: button#submit.btn
  logoutLink: 'a:has-text("Log out")', // CSS: a:has-text("Log out")
  errorMessage: '#error', // CSS: #error
  successHeading: 'h1:has-text("Logged In Successfully")',
  successMessage: 'text=Congratulations student. You successfully logged in!',
};

const loginWith = async (page: Page, username: string, password: string) => {
  await page.fill(locators.usernameField, username);
  await page.fill(locators.passwordField, password);
  await page.click(locators.submitButton);
};

test.describe('Practice Test Automation login page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    await expect(page).toHaveTitle(/Test Login/i);
    await expect(page.locator(locators.usernameField)).toBeVisible();
    await expect(page.locator(locators.passwordField)).toBeVisible();
    await expect(page.locator(locators.submitButton)).toBeVisible();
     await page.waitForTimeout(3000)
  });

  test('Positive login with valid credentials', async ({ page }) => {
    await loginWith(page, 'student', 'Password123');

    await expect(page).toHaveURL(/\/logged-in-successfully\//);
    await expect(page.locator(locators.successHeading)).toBeVisible();
    await expect(page.locator(locators.successMessage)).toBeVisible();
    await expect(page.locator(locators.logoutLink)).toBeVisible();
     await page.waitForTimeout(3000)
  });

  test('Logout after successful login', async ({ page }) => {
    await loginWith(page, 'student', 'Password123');
    await expect(page.locator(locators.logoutLink)).toBeVisible();

    await page.click(locators.logoutLink);
    await expect(page).toHaveURL(baseUrl);
    await expect(page.locator(locators.usernameField)).toBeVisible();
    await expect(page.locator(locators.passwordField)).toBeVisible();
    await page.waitForTimeout(3000)
  });

  test('Negative login with invalid username', async ({ page }) => {
    await loginWith(page, 'incorrectUser', 'Password123');

    await expect(page.locator(locators.errorMessage)).toBeVisible();
    await expect(page.locator(locators.errorMessage)).toHaveText('Your username is invalid!');
    await expect(page).toHaveURL(baseUrl);
    await page.waitForTimeout(3000)
  });

  test('Negative login with invalid password', async ({ page }) => {
    await loginWith(page, 'student', 'incorrectPassword');

    await expect(page.locator(locators.errorMessage)).toBeVisible();
    await expect(page.locator(locators.errorMessage)).toHaveText('Your password is invalid!');
    await expect(page).toHaveURL(baseUrl);
    await page.waitForTimeout(3000)
  });

  test('Negative login with blank username and blank password', async ({ page }) => {
    await loginWith(page, '', '');
    await expect(page.locator('body')).toContainText('invalid');
    await expect(page).toHaveURL(baseUrl);
    await page.waitForTimeout(3000)
  });

  test('Edge case: username case sensitivity', async ({ page }) => {
    await loginWith(page, 'Student', 'Password123');

    await expect(page.locator('body')).toContainText('invalid');
    await expect(page).toHaveURL(baseUrl);
    await page.waitForTimeout(3000)
  });

  test('Edge case: password with leading and trailing spaces', async ({ page }) => {
    await loginWith(page, 'student', ' Password123 ');

    await expect(page.locator('body')).toContainText('invalid');
    await expect(page).toHaveURL(baseUrl);
    await page.waitForTimeout(3000)
  });

  test('Edge case: special characters in username and password', async ({ page }) => {
    await loginWith(page, 'student<script>alert(1)</script>', 'Password123!@#$');

    await expect(page.locator('body')).toContainText('invalid');
    await expect(page).toHaveURL(baseUrl);
    await page.waitForTimeout(3000)

  });
});
