import { test, expect } from '@playwright/test';
test('practice_aut_test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle(/Automation Testing Practice/);
    await page.getByLabel('Male', { exact: true }).check()
    await page.getByRole('checkbox', { name: 'Sunday' }).check();
    await page.getByRole('checkbox', { name: 'Thursday' }).check();
    await page.getByRole('checkbox', { name: 'Saturday' }).check();

});
