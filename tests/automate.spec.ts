import { test, expect, _baseTest } from '@playwright/test';

test.only('radio and checkbox', async ({page})=> {
  await page.goto('https://testautomationpractice.blogspot.com/')

  await page.getByRole ("radio", {name: 'Female'}).click()

  await expect (page.getByRole ("radio", {name: 'Female'})).toBeChecked()

  await page.getByRole('checkbox', {name:'Monday'}).check()

  await expect (page.getByRole('checkbox' ,{name:'Monday'})).toBeChecked()

    await page.getByRole('checkbox', {name:'Monday'}).uncheck()

  await expect (page.getByRole('checkbox', {name:'Monday'})).not.toBeChecked()


})