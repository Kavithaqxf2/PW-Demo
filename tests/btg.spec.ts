import { test, expect, _baseTest } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('btest', async ({ page }) => {
  await page.goto('https://biztechgeeks.com/');
  await expect(page.getByRole('heading', { name: 'Creative Marketing' })).toBeVisible();
  await page.getByRole('heading', { name: 'Creative Marketing' }).click();
  await expect(page.getByRole('heading', { name: 'Agency' })).toBeVisible();
  await expect(page.getByRole('banner')).toContainText('Unlock Growth Now');
});


