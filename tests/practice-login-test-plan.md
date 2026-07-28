# Practice Test Login Test Plan

## Application Overview

Comprehensive test plan for the Practice Test Automation login page at https://practicetestautomation.com/practice-test-login/. Covers positive login, negative validation, logout flow, and edge cases including blank inputs, casing, and special characters.

## Test Scenarios

### 1. Practice Login Flow

**Seed:** `tests/seed.spec.ts`

#### 1.1. Positive login with valid credentials

**File:** `tests/practice-login-test-plan.md`

**Steps:**
  1. Open the login page at https://practicetestautomation.com/practice-test-login/
    - expect: The login page loads successfully
    - expect: The page title contains "Test Login"
    - expect: The Username and Password fields are visible
  2. Enter username student into the Username field
    - expect: The Username field contains student
  3. Enter password Password123 into the Password field
    - expect: The Password field contains Password123
  4. Click the Submit button
    - expect: The page navigates to a logged-in success page
    - expect: The URL contains /logged-in-successfully/
    - expect: The page displays a success confirmation such as "Congratulations" or "successfully logged in"
    - expect: A Log out button is displayed

#### 1.2. Logout after successful login

**File:** `tests/practice-login-test-plan.md`

**Steps:**
  1. Open the login page at https://practicetestautomation.com/practice-test-login/
    - expect: The login page loads successfully
  2. Enter valid credentials: username student and password Password123
    - expect: Username and Password fields contain the correct values
  3. Click the Submit button
    - expect: The logged-in success page is displayed
    - expect: A Log out button is visible
  4. Click the Log out button
    - expect: The application returns to the login page
    - expect: The URL returns to the login page path
    - expect: The Username and Password fields are visible again

#### 1.3. Negative login with invalid username

**File:** `tests/practice-login-test-plan.md`

**Steps:**
  1. Open the login page at https://practicetestautomation.com/practice-test-login/
    - expect: The login page loads successfully
  2. Enter username invalidUser into the Username field
    - expect: The Username field contains invalidUser
  3. Enter password Password123 into the Password field
    - expect: The Password field contains Password123
  4. Click the Submit button
    - expect: An error message is displayed
    - expect: The error text reads "Your username is invalid!"
    - expect: The user remains on the login page

#### 1.4. Negative login with invalid password

**File:** `tests/practice-login-test-plan.md`

**Steps:**
  1. Open the login page at https://practicetestautomation.com/practice-test-login/
    - expect: The login page loads successfully
  2. Enter username student into the Username field
    - expect: The Username field contains student
  3. Enter password wrongPassword into the Password field
    - expect: The Password field contains wrongPassword
  4. Click the Submit button
    - expect: An error message is displayed
    - expect: The error text reads "Your password is invalid!"
    - expect: The user remains on the login page

#### 1.5. Negative login with blank username and password

**File:** `tests/practice-login-test-plan.md`

**Steps:**
  1. Open the login page at https://practicetestautomation.com/practice-test-login/
    - expect: The login page loads successfully
  2. Leave the Username field blank
    - expect: The Username field is empty
  3. Leave the Password field blank
    - expect: The Password field is empty
  4. Click the Submit button
    - expect: An error message is displayed
    - expect: The page displays an invalid credential message
    - expect: The user remains on the login page

#### 1.6. Edge case: username case sensitivity

**File:** `tests/practice-login-test-plan.md`

**Steps:**
  1. Open the login page at https://practicetestautomation.com/practice-test-login/
    - expect: The login page loads successfully
  2. Enter username Student with uppercase S into the Username field
    - expect: The Username field contains Student
  3. Enter password Password123 into the Password field
    - expect: The Password field contains Password123
  4. Click the Submit button
    - expect: Login fails
    - expect: An error message is displayed
    - expect: The user remains on the login page
    - expect: The error text indicates invalid credentials or invalid username

#### 1.7. Edge case: password with leading/trailing spaces

**File:** `tests/practice-login-test-plan.md`

**Steps:**
  1. Open the login page at https://practicetestautomation.com/practice-test-login/
    - expect: The login page loads successfully
  2. Enter username student into the Username field
    - expect: The Username field contains student
  3. Enter password  Password123  with spaces into the Password field
    - expect: The Password field contains the exact value with spaces
  4. Click the Submit button
    - expect: Login fails
    - expect: The page displays an invalid password error
    - expect: The user remains on the login page

#### 1.8. Edge case: special characters in username and password

**File:** `tests/practice-login-test-plan.md`

**Steps:**
  1. Open the login page at https://practicetestautomation.com/practice-test-login/
    - expect: The login page loads successfully
  2. Enter username student<script>alert(1)</script> into the Username field
    - expect: The Username field contains the special character string
  3. Enter password Password123!@#$ into the Password field
    - expect: The Password field contains the special character string
  4. Click the Submit button
    - expect: Login fails
    - expect: An error or invalid credentials message is displayed
    - expect: The page remains on the login form
    - expect: No unexpected browser script execution occurs
