// Drop down

// 2 Types of DD

// 1. Static drop down - The value will never changes - Gender/country
    // a. Single select DD
    // b. Multi select DD


// 2. Dynamic drop down - The value will be changable - electornics
    // a. Single select DD
    // b. Multi select DD


// Developement of DD

// 1. Using <select> tag
// 2. NON select tag - div, span, li, ul,......


// 1. DD developed using <select> tag

// Step by step procedure to select the value from the DD

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Get the value from the drop down using - 
// selectOption("value", {label or value or index})

// Example: page.locator("#dd").selectOption("AL", {value: "DZ"} or {label: "Bahrain"})
// OR {index:10}

// 4. If the drop down is multi-select - selectOption(["AS", "BS", "CS"])


// ***********************************************/

// 2. DD developed using NON select tag

// Step by step procedure to select the value from the DD


// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Click on the drop down element identified in the step #2
// 4. Identify and click on the element that you want to select from the drop down

import {test, expect} from '@playwright/test'

test("Handling drop down developed using SELECT tag", async ({page})=>{
    // 1. Launch the url
    await page.goto("https://practice.expandtesting.com/dropdown")

    const country = page.locator("#dropdown");
    await country.selectOption("1");
    await page.waitForTimeout(1000);


    const count = page.locator("#elementsPerPageSelect")
    await count.selectOption("10");
    await count.selectOption("50");
    await expect(count).toHaveValue("50")
    // 2. Locate the drop down element by writing the locator
    const countryDD = page.locator("#country")

    // 3. Get the value from the drop down using - 
    // selectOption("value", {label or value or index})
    await countryDD.selectOption("AU")
    
    // toHaveValue("AU")
    await expect(countryDD).toHaveValue("AU")

    // 2nd way we can also use value as an optional paramter
    await countryDD.selectOption({value:"BR"})

    // 3rd way - by using label as optional parameter
    await countryDD.selectOption({label:'Wallis and Futuna'})
    await page.waitForTimeout(1000);

    // 4th way - by using index
    await countryDD.selectOption({index: 102})
    await page.waitForTimeout(1000);
});


    test.only("Multiple DD using SELECT tag", async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    const carDD = await page.locator("#cars")
    await carDD.selectOption(["volvo", "opel"])
    await expect(carDD).toHaveValues(["volvo", "opel"])
    await carDD.selectOption([{label:'Saab'}, {index:3}, {value:'volvo'}])

await page.locator("#react-select-2-input").click();

await page.getByRole("option", {name: "Group 1, option 2"}).click();

})

// Assignement to complete - 
// Select the value from the drop down which have been developed using NON SELECT

// https://demoqa.com/select-menu