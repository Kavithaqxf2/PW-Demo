// click - click()
// right click - click({button:'right'})
// double click - dblclick()
// mouse over - hover()
// drag and drop - Locator.dragTo(Locator)
// scrolling - scrollIntoViewIfNeeded()

import {test, expect} from '@playwright/test'

test.only("Handling right click and double click", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")


    await page.getByText("Double-Click Me To See Alert", {exact:true}).dblclick()

    await page.getByText("right click me").click({button:'right'})
    await page.waitForTimeout(3000)

    await page.getByText("Paste", {exact:true}).click()
    await page.waitForTimeout(3000)


    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole('button', {name:'Copy Text'}).dblclick()
    await expect(page.locator("#field2")).toHaveValue("Hello World!")
    await page.waitForTimeout(3000)

    // Note: Playwright auto handles the alert/popup/dialog event
});

test("Handling mouse over on an element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")

    await page.getByText("Travel Policies").hover()
    await expect(page.getByTestId("test-id-Baggage Information")).toHaveText("Baggage Information")

})

test("Handling scrolling on the page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.getByText("Download Files", {exact:true}).scrollIntoViewIfNeeded()
    await page.getByText("Download Files", {exact:true}).click()
    await page.locator("#input3").fill("Testing")
    await page.locator("#inputText").fill("Scroll up")
    await expect(page.locator("#inputText")).toHaveValue("Scroll up")

    // Note: Playwright by default perform scrolling on the page
})

test("Handling drag and drop", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const sourceElement = await page.locator("#draggable")
    const targetElement = page.locator("#droppable")

    // Locator.dragTo(locator)

    // await sourceElement.dragTo(targetElement)

    await sourceElement.hover()
    await page.mouse.down()
    await targetElement.hover()
    await page.mouse.up()

    await expect(page.locator("#droppable p")).toHaveText("Dropped!")
   

});



