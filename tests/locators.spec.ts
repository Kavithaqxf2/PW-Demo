// Locators - To identify the element on the web page is known as locators

//DOM - Document object model 

// <input type="password" name="password" id="password">  - DOM

// input - tagname
// type, name and id - attribute of an element
// password.... - value of the attributes resp

// <label for="username">Username</label> - DOM

// label - tagname
// for  - attribute
// Username - textvalue

// 1. css selector - #2
// 2. xpath - #3
// 3. Playwright getBy locators - #1

// <label>  - Starting tag
// </label> - closing tag
// <input> </input>

// <> 
// </>


//*[@id='username'] - xpath

// -  #username - CSS Selector


/*
 *  CSS SELECTOR
 *  a. tagname#idvalue or b. #idvalue or c.[id='value']
 *  b. tagname.classname or .classname or c. [class='classvalue'] 
 * c. tagname[attribute = 'value'] or [attribute - "value"] input[id='value']
 * d. parenttagename >> childtagname or parentLocator childLocator

 * 
 * 1. if "id" as an attribute is present we can use the below css selector for locators:
 * Syntax: - 
 * # = id attribute
 * 
 *  a. tagname#idvalue or b. #idvalue or c.[id='value']
 * 
 * input#username 
 * (take only from id not from scripts tag)
 * 
 * Ex: - if tagname is <input> and id is username(id ='username')
 * input#username OR #username
 * 
 * 2. if "class" attribute is present we can use the below selectors:
 * 
 * but class name will not be the unique one unlike id (it may have different classes) 
 * 
 * tagname.classname or .classname or c. [class='classvalue'] 
 * 
 * section.main-container
 * 
 * // .classname1.classname2.classname3
 * 
 * If there is a speACE between 2 class then it is classname 1 and calssname 2
 * 
 * For ex:  class=" mr-sm-2 form-control"
 * 
 * ClassName1 - mr-sm-2 ClassName2 - form-control
 * 
 * Add . if you want to use both the class name 
 * //input.mr-sm-2.form-control
 * 
 * 
 * Ex: - if tagname is "input" and classname is "user"
 * input.user OR .user   
 * 
 * 3. Write css based on any attribute: []
 * 
 * [attribute = 'value'] - Ex: - [type='username'].first() // [value="Login"]
 * 
 * tagname[attribute = 'value'] - input[id='value']
 * 
 * [class=' mr-sm-2 form-control']
 *  
 * 
 * 4. Write css traversing from parent to child:
 * 
 * parenttagename >> childtagname or parentLocator childLocator
 * 
 * Ex: - input >> div (OR) input div (by just provide a space between parent and child)
 * #userEmail-wrapper input
 * 
 * 
 * 
 * 
 * #form #username
 * 
 * first() - first matching 
 * last() - last matching - 
 * nth(index) - nth(0) - nth(1)
 * 
 * 
 * page.locator(.class).first() - to get the first matching element
 * page.locator(.class).last() - to get the last matching element
 * page.locator(.class).nth(1) - to get the 2nd matching element
 * 
 * 
 

* 5. By writing the locators based on the text: - We do not use
 * 
 * Ex: - ("text= Add to cart") // ("text= Email")
 * 
 * <h5>Email</h5> - ('text= Email') // ("text = Email")
 * 
 * <h5>Student Registration Form</h5>
 * 
 * ("text=Student Registration Form")
 * 
 */

/*
// 2. XPATH

//  / - Absolute xpath - /html/body/div/div/section/section/h2
// // - Relative xpath - (//h2)[1] - here 1 is called as index

Example RXpath - //input[@id ="name"]

// In xpath the index will starts from 1 

//tagname or *[@attribute = 'value'] - (//*[@attribute = 'value'])[2]


// Syntax:
1. //*[@attribute='value'] or (//*[@attribute='value'])[1]

//*[@id='userEmail']

2. //tagname[@attribute='value'] or (//tagname[@attribute='value'])[1]

(//input[@id='userEmail'])[1]

AXES - xpath

3. // Parent to child - by using /(immediate child) or //(any childern - can be descandant)

//div[@class='form-group']/input[@id='userEmail'] OR 

//div[@class='form-group']//input[@id='userEmail']
//div[@class='form-group']//input[@id='password']


4. Moving from one sibling to another sibling

  //label[@for='email']/following-sibling::input[@id='userEmail']
  //label[@for='username']/following-sibling::input

  //h1[@class='text-center']/following-sibling::h5[1]

  (//div[@class='ykJuJZ'])[1]/following-sibling::a 
  // - to move from one sibling to another sibling - example for Flipkart Abount section.

5. //input[@id='userEmail']/preceding-sibling::label


// <label for="username">Username</label> - preceding-sibling to input tag
// <input type="text" name="username" id="username"> - following sibling to label tag



// 6. //*[text()= 'Text Value of an element']

//h2[text() = 'Test login']  -  //h5[text() = 'Student Registration Form']

// 7. //tagname[contains(text(), "some part of the text value of an element")]

(//h2[contains(text(), 'Test')])[1]

//li[contains(text(),'negative')]

//*[contains(text(),'Registration')]  -- //h5[contains(text(),'Registration')]

//Syntcx:
// * or tagName[contains(text(), 'Registration')]
//h2[contains(text(), 'login')]/parent::section

//*[contains(text(), 'negative')]



// 8. From child to parent traversing

// * or tagname [@attribute='value']/parent::parentTag
//div[@id='genterWrapper']/parent::form - From child to Parent

//input[@id='username']/ancestor::*[2]




// <div id ='abc'> Email </div>



// To write the locator using CSS or XPATH - page.locator("#idvalue")


page.locator("#username") OR
page.locator("//input[@id='username']")

*/

// 3. Playwright special methods for locators

// GetBy Locators in Playwright

/*

These are the recommended built-in locators.

page.getByRole() - Works on the role of an element - button, textbox, checkbox, heading, link, radio, menuitem
page.getByText() - Identify the element by using the text value (contains)
page.getByLabel()
page.getByAltText()
page.getByTestId() - 
page.getByPlaceholder() - 
page.getByTitle()


// <h2>ad</h2>
// <h2>ads</h2>

page.getByText("ad", {exact:true})

page.getByText('ad', {exact:true})
page.getByText('Practice Form', {exact:true})


1. page.getByRole('radio', {name: 'Female'}) to locate by explicit and implicit accessibility attributes.

// heading - <h1-h6>
// button - <button> or class="btn"
// textbox - <input> or <textarea>
// radio - type = 'radio'
// checkbox - type = 'checkbox'
// link - <a> </a>
//option - name (group 1, option 2) - picklist option 

page.getByRole('button', {name: 'Submit'})

// Email
// Emails

2. page.getByText('Email', {exact: true}) to locate by text content.

3. page.getByLabel() to locate a form control by associated label's text.

    1. When you have "for" as an attribute for an element that have been developed using <label> - there we can directly use page.getByLable('label text')
    2. When you find out "<input>" inside the <label> - 
    <label class="form-check-label" <input.....>Tuesday</label>

    page.getByLabel("Username")
    page.getByLabel("Wednesday").last()

4. page.getByPlaceholder('First Name')  - to locate an input by "placeholder" as an attribute.

    page.getByPlaceholder("name@example.com")

5. page.getByAltText() to locate an element, usually image, by its text alternative.("alt" as an attribute)

    page.getByAltText("logo image")

6. page.getByTitle() to locate an element by its "title" attribute.

    page.getByTitle("Home page link")


7. page.getByTestId() to locate an element based on its "data-testid" attribute.

    page.getByTestId("edit-profile-btn")

*/


// await expect(page.getByRole('heading', { name: 'Sign up', exact :true })).toBeVisible();

// await page.getByRole('checkbox', { name: 'Subscribe' }).check();

// await page.getByRole('button', { name: 'Submit' }).click();

// await page.getByTestId('edit-profile-btn').click()


// On regular basis we will be using the below locators:

// 1. page.getByRole() - to locate the element based on the role of an element
// 2. page.getByText() - to locate the element based on the text content
// 3. page.getByPlaceholder() - to locate the element based on the placeholder as an attribute
// 4. page.getByTestId() - to locate the element based on the data-testid as an attribute


// codegen - Code generation - 


// Dynamic table xpath where rows and columns keeps chaning upon the refresh
//tr[td[text()='System']]/td[count(//th[text()='CPU (%)']/preceding-sibling::th)+1]

// Alert
// Multiple windows