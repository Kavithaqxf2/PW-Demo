import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

const url = "https://rahulshettyacademy.com/client"
let email = "testnHNk@gmail.com"
let password = "Testing@1234"
let invalidPassword = "Testing"
let errorMessage = "Incorrect email or password."

let lp:LoginPage
test.beforeEach(async ({page})=>{
   lp = new LoginPage(page)
   await lp.launchURL(url)
})

test("Test login with correct credentials", {tag:['@smoke', '@regression']}, async ()=>{
    await lp.loginIntoApplication(email, password)
    await expect(lp.homePageIdentifer).toBeVisible()
})

test("Test login with incorrect credentials", {tag:'@regression'}, async ()=>{
    await lp.loginIntoApplication(email, invalidPassword)
    await expect(lp.errorMessage).toHaveText(errorMessage)
})

// Hooks in Playwright
