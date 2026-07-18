/* import { test, expect, _baseTest } from '@playwright/test';

test('flipkart', async ({ page }) => {
  await page.goto('https://flipkart.com/');
  await page.getByText('heading', { name: 'About' })
  await expect(page.getByLabel('heading', { name: 'Contact Us' }))
  await expect(page.getByLabel('heading', { name: 'About Us' })).toBeVisible();
  await expect(page.getByLabel('heading', { name: 'Careers' })).toBeVisible();
  await expect(page.getByLabel('heading', { name: 'Flipkart Stories' })).toBeVisible();
  await expect(page.getByLabel('heading', { name: 'Press' })).toBeVisible();
});

*/


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await expect(page.getByRole('link', { name: 'Image Image' })).toBeVisible();

  await page.getByRole('button', { name: '✕' }).click();
  await expect (page.getByText('ABOUT', { exact: true })).toBeVisible();
  await expect (page.getByRole('link', { name: 'Contact Us' })).toBeVisible();
  await expect (page.getByRole('link', { name: 'About Us' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Careers' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Flipkart Stories' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Press' })).toBeVisible();
});

test('practice_aut_test', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page).toHaveTitle(/Automation Testing Practice/);

});
