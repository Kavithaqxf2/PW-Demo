import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/dashboard/myorders');
  await expect(page.getByRole('heading', { name: 'Practice Website for Rahul' })).toBeVisible();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('ammumaya01@gmail.com');
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Ammu@2020');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('button', { name: 'Sign Out' })).toBeVisible();
  await page.getByRole('button', { name: ' Add To Cart' }).nth(2).click();
  await expect(page.getByRole('button', { name: '   Cart' })).toBeVisible();

  await page.getByRole('button', { name: ' Add To Cart' }).nth(2).click();
  await page.getByRole('button', { name: '   Cart' }).click();
  await expect(page.getByRole('heading', { name: 'iphone 13 pro' })).toBeVisible();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
  await expect(page.getByText('ammumaya01@gmail.com')).toBeVisible();
  await expect(page.getByRole('textbox').nth(4)).toHaveValue('ammumaya01@gmail.com');
  await page.getByRole('textbox', { name: 'Select Country' }).click();
  await page.getByRole('textbox', { name: 'Select Country' }).pressSequentially('singapor');
  await page.getByRole('button', { name: ' Singapore' }).click();
  await page.getByText('Place Order').click();
   await page.getByText('Orders History Page').click();
  await page.getByRole('button', { name: 'View' }).first().click();

});