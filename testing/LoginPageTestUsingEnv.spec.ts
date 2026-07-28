import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'


let lp:LoginPage
test.beforeEach(async ({page})=>{
   lp = new LoginPage(page)
   await lp.launchURL(process.env.BASE_URL!)
})

test("Test login with correct credentials", {tag:['@smoke', '@regression']}, async ()=>{
    await lp.loginIntoApplication(process.env.EMAIL!, process.env.PASSWORD!)
    await expect(lp.homePageIdentifer).toBeVisible()
})

test("Test login with incorrect credentials", {tag:'@regression'}, async ()=>{
    await lp.loginIntoApplication(process.env.EMAIl!, process.env.INCORRECT_PASSWORD!)
    await expect(lp.errorMessage).toHaveText(process.env.ERROR_MESSAGE!)
})

// Hooks in Playwright
