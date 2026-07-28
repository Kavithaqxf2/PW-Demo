import { test, expect } from '@playwright/test';

const baseUrl = 'https://practicetestautomation.com/practice-test-login/';

// Human-friendly locators with CSS equivalents for manual testers
const locators = {
  usernameField: '#username', // CSS: input#username
  passwordField: '#password', // CSS: input[type="password"]#password
  submitButton: '#submit', // CSS: button#submit.btn
  logoutLink: 'a:has-text("Log out")', // CSS: a:has-text("Log out")
  successHeading: 'h1:has-text("Logged In Successfully")',
  successMessage: 'text=Congratulations student. You successfully logged in!',
  usernameInvalidMessage: 'text=Your username is invalid!',
  passwordInvalidMessage: 'text=Your password is invalid!',
};

const loginWith = async (page, username, password) => {
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
  });

  test('Positive login with valid credentials', async ({ page }) => {
    await loginWith(page, 'student', 'Password123');

    await expect(page).toHaveURL(/\/logged-in-successfully\/);
    await expect(page.locator(locators.successHeading)).toBeVisible();
    await expect(page.locator(locators.successMessage)).toBeVisible();
    await expect(page.locator(locators.logoutLink)).toBeVisible();
  });

  test('Logout after successful login', async ({ page }) => {
    await loginWith(page, 'student', 'Password123');
    await expect(page.locator(locators.logoutLink)).toBeVisible();

    await page.click(locators.logoutLink);
    await expect(page).toHaveURL(baseUrl);
    await expect(page.locator(locators.usernameField)).toBeVisible();
    await expect(page.locator(locators.passwordField)).toBeVisible();
  });

  test('Negative login with invalid username', async ({ page }) => {
    await loginWith(page, 'incorrectUser', 'Password123');

    await expect(page.locator(locators.usernameInvalidMessage)).toBeVisible();
    await expect(page.locator('body')).toContainText('Your username is invalid!');
    await expect(page).toHaveURL(baseUrl);
  });

  test('Negative login with invalid password', async ({ page }) => {
    await loginWith(page, 'student', 'incorrectPassword');

    await expect(page.locator(locators.passwordInvalidMessage)).toBeVisible();
    await expect(page.locator('body')).toContainText('Your password is invalid!');
    await expect(page).toHaveURL(baseUrl);
  });

  test('Negative login with blank username and blank password', async ({ page }) => {
    await loginWith(page, '', '');
    await expect(page.locator('body')).toContainText('invalid');
    await expect(page).toHaveURL(baseUrl);
  });

  test('Edge case: username case sensitivity', async ({ page }) => {
    await loginWith(page, 'Student', 'Password123');

    await expect(page.locator('body')).toContainText('invalid');
    await expect(page).toHaveURL(baseUrl);
  });

  test('Edge case: password with leading and trailing spaces', async ({ page }) => {
    await loginWith(page, 'student', ' Password123 ');

    await expect(page.locator('body')).toContainText('invalid');
    await expect(page).toHaveURL(baseUrl);
  });

  test('Edge case: special characters in username and password', async ({ page }) => {
    await loginWith(page, 'student<script>alert(1)</script>', 'Password123!@#$');

    await expect(page.locator('body')).toContainText('invalid');
    await expect(page).toHaveURL(baseUrl);
  });
});
