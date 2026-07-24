import {test, expect} from '@playwright/test'

test("Screenshot of a Page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path: "screenshot/page.jpeg"})
})

test("Screenshot of an Element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Enter Name").screenshot({path:"screenshot/firstName.jpeg"})
})

test("Screenshot of Full Page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path:"screenshot/fullPage.jpeg", fullPage:true})
})

// Class & Object
// POM Framework