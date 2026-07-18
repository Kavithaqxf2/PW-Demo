import {test,expect} from '@playwright/test';
test('demoqa_element', async ({ page }) => {
await page.goto('https://demoqa.com/text-box');
await page.getByRole('textbox', { name: 'Full Name' }).fill('Kavitha');
await page.getByRole('textbox', { name: 'name@example.com' }).fill('pkd@gmail.com');
await page.getByRole('textbox', { name: 'Current Address' }).fill('123test');
await page.locator('#permanentAddress').fill('123testtest');
// await page.getByRole('button', { name: 'Submit' }).click();
await page.locator('#submit').click();
await expect(page.locator('#output #name')).toContainText('Kavitha');
await expect(page.locator('#output #email')).toContainText('pkd@gmail.com');
await expect(page.locator('#output #currentAddress')).toContainText('123test');
await expect(page.locator('#output #permanentAddress')).toHaveText('123test');
});