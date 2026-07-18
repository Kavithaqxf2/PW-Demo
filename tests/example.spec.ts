import { test, expect } from '@playwright/test';
import { base } from 'framer-motion/client';
// page - fixture - global object
test("Multiple windows handling", async function ({ page }) {

    await page.goto("https://demo.automationtesting.in/Windows.html")
    const page1 = page.waitForEvent("popup")

    await page.locator("#Tabbed button").click()
    const newPage = await page1

    await newPage.getByText("Downloads", { exact: true }).click();

    await expect(newPage.locator("#bindings"))
    .toContainText("Selenium Clients and WebDriver Language Bindings");

    await page.getByText("Home", { exact: true }).click();

    await expect(page.getByPlaceholder("Email id for Sign Up"))
    .toBeVisible();

});

//new
//new//new//new//new//new

