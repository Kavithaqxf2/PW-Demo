import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import data from '../testdata/testdata.json'


let lp:LoginPage
test.beforeEach(async ({page})=>{
   lp = new LoginPage(page)
   await lp.launchURL(data.url)
})

test("Test login with correct credentials", {tag:['@smoke', '@regression']}, async ()=>{
    await lp.loginIntoApplication(data.email, data.password)
    await expect(lp.homePageIdentifer).toBeVisible()
})

test("Test login with incorrect credentials", {tag:'@regression'}, async ()=>{
    await lp.loginIntoApplication(data.email, data.invalidPassword)
    await expect(lp.errorMessage).toHaveText(data.errorMessage)
})

// Hooks in Playwright
