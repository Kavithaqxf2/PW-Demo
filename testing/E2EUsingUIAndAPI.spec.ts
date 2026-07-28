import {test, expect} from '@playwright/test'

const url = "https://rahulshettyacademy.com/client"
const loginUrl = "https://rahulshettyacademy.com/api/ecom/auth/login"
const loginPayload = {userEmail: "testnHNk@gmail.com", userPassword: "Testing@1234"}
const orderURL = "https://rahulshettyacademy.com/api/ecom/order/create-order"
const orderPayload = {orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]}
let token:string
let country = " Singapore"
let productName = "iphone 13 pro"
let email = "testnHNk@gmail.com"
let orderID:string


test.beforeEach("API Testing for login", async ({request})=>{

    const response = await request.post(loginUrl, {
        data: loginPayload
    })
    const responseBody  = await response.json()
   // console.log(responseBody);

    expect(responseBody).toHaveProperty("token")
    expect( typeof responseBody.token).toBe("string")

    token = responseBody.token
    console.log(token);

    const orderResponse = await request.post(orderURL, {
        data:orderPayload,
        headers:{
            "authorization": token
        }
        })

    const orderJsonResponse = await orderResponse.json()
    orderID = await orderJsonResponse.orders[0]
})

test("E2E automation scenario", async ({page})=>{
    await page.addInitScript(function(value:string){
        window.localStorage.setItem("token", value)
    }, token)

    await page.goto(url)
    await page.locator("[routerlink='/dashboard/myorders']").first().click()
    await expect(page.locator("table tbody")).toBeVisible()


    const rows = page.locator("table tbody tr")
    const rowCount = await rows.count()

    for(let i=0; i<rowCount; i++){
        const orderText = await rows.nth(i).locator("th").textContent()

        if(orderText === orderID){
            await rows.nth(i).locator("button").first().click()
            break
        }
    }

    await expect(page.locator("div.col-text")).toHaveText(orderID!)
})

