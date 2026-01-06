import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { LoginMessages } from "../data/errorMessages";
import { environment } from "../config/config";

test('Valid Login Test @login @login-valid', async ({ page }) => {

    //Validate all the login process with valid credentials
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.fillUsername(environment.loginUsername);
    await loginPage.fillPassword(environment.loginPassword);
    const secureAreaPage = await loginPage.clickLogin();
    await secureAreaPage.expectMessageLogged();
});

test('Invalid password login @login @login-neg', async ({ page }) => {
    //Validate all the login process with INVALID  password
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.fillUsername(environment.loginUsername);
    await loginPage.fillPassword("invalid_password");
    await loginPage.clickLogin();
    await loginPage.validateErrorMessage(LoginMessages.INVALID_PASS);
    await loginPage.validateMessageLoginPage();
});

test('Invalid username login @login @login-neg', async ({ page }) => {
    //Validate all the login process with INVALID  credentials
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.fillUsername("invalid_user");
    await loginPage.fillPassword(environment.loginPassword);
    await loginPage.clickLogin();
    await loginPage.validateErrorMessage(LoginMessages.INVALID_USER);
    await loginPage.validateMessageLoginPage();
});

test('Invalid credentials login @login @login-neg', async ({ page }) => {
    //Validate all the login process with INVALID  credentials
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.fillUsername("invalid_user");
    await loginPage.fillPassword("invalid_password");
    await loginPage.clickLogin();
    await loginPage.validateErrorMessage(LoginMessages.INVALID_USER);
    await loginPage.validateMessageLoginPage();
});