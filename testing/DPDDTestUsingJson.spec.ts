import {test, expect} from '@playwright/test'
import { DashboardPage } from '../pages/DashboardPage'
import { LoginPage } from '../pages/LoginPage'
import products from '../testdata/product.json'


let lp:LoginPage
let dp:DashboardPage

for(let product of products){
test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    dp = new DashboardPage(page)
    await lp.launchURL(product.url)
    await lp.loginIntoApplication(product.email, product.password)
    await expect(lp.homePageIdentifer).toBeVisible()
})

// parameterization of the test case


    test(`Search and add the product to the cart for ${product.productName}`,async ()=>{
    
    await dp.searchProduct(product.productName, 1)
    await expect(dp.addToCartMessage).toHaveText(product.successMessage)
    })

    test(`Search and view product details for ${product.productName}`, {tag: ['@smoke', '@regression']}, async ()=>{
        await dp.searchProduct(product.productName, 0)
        await expect(dp.viewPageProductName).toHaveText(product.productName)
        await expect(dp.viewPageProductPrice).toHaveText(dp.homePageProductPrice)
    })
}

