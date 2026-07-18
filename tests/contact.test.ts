import { expect, test } from '@playwright/test';

test.only('submits the Biztechgeeks contact form successfully', async ({ page }) => {
  await page.goto('https://biztechgeeks.com/contact/');

  const contactForm = page.locator('#page-form');

  await contactForm.getByPlaceholder('Full Name*').fill('Playwright Test User');
  await contactForm.getByPlaceholder('Telephone').fill('9876543210');
  await contactForm
    .getByPlaceholder('Email Address*')
    .fill('playwright.test@example.com');
  await contactForm
    .getByPlaceholder('Website')
    .fill('https://example.com');
  await contactForm
    .getByPlaceholder('Message')
    .fill('Automated contact form test submitted with Playwright.');

  await contactForm
    .locator('input[name="cfa-redirect"]')
    .evaluate((element: HTMLInputElement) => {
      element.value = '';
    });

  await contactForm.getByRole('button', { name: 'Contact Us' }).click();

  const successMessage = contactForm
    .locator('xpath=..')
    .locator('.pagelayer-message-box.pagelayer-cf-msg-suc');

  await expect(successMessage).toContainText(
    /Your message was sent successfully/i,
    { timeout: 15_000 },
  );
});
