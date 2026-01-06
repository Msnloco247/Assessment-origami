import { Page, expect } from "@playwright/test";
import { logger } from "../utils/loggerUtil";
import SecureAreaPage from "./SecureAreaPage";

export default class LoginPage {

    private readonly inputUsername = '#username';
    private readonly inputPassword = '#password';
    private readonly btnLogin = 'button[type="submit"]';
    private readonly titleLoginPage = 'h2:has-text("Login Page")';
    private readonly divFlashMessage = '#flash';

    constructor(private page: Page) { } 


    //LOGIN PAGE METHODS

    async navigateToLogin() {
        logger.info("Navigating to Login Page");
        await this.page.goto('/login')
        .catch((error) => {
            logger.error(`Error navigating to Login Page: ${error}`);
            throw error;
        })
        .then(() => {
            logger.info("Successfully navigated to Login Page");
        });
    }

    async fillUsername(username: string) {
        await this.page.locator(this.inputUsername).fill(username)
            .catch((error) => {
                logger.error(`Error filling in username: ${error}`);
                throw error;
            })
            .then(() => {
                logger.info("Successfully filled in username");
            });
    }

    async fillPassword(password: string) {
        await this.page.locator(this.inputPassword).fill(password)
            .catch((error) => {
                logger.error(`Error filling in password: ${error}`);
                throw error;
            })
            .then(() => {
                logger.info("Successfully filled in password");
            });
    }

    async clickLogin() {
        await this.page.locator(this.btnLogin).click()
            .catch((error) => {
                logger.error(`Error clicking on Login button: ${error}`);
                throw error;
            })
            .then(() => {
                logger.info("Successfully clicked on Login button");
            });
            
            const secureAreaPage = new SecureAreaPage(this.page);
            return secureAreaPage;
    }

    async validateMessageLoginPage() {
        await expect(this.page.locator(this.titleLoginPage)).toBeVisible()
            .catch((error) => {
                logger.error(`Login Page title is not visible: ${error}`);
                throw error;
            })
            .then(() => {
                logger.info("Login Page title is visible");
            });

    }

    private async verifyFlashMessage(selector: string, expectedText: string) {
        //get the locator
        const flashMessage = this.page.locator(selector);

        try {
            // validate visibility
            await expect(flashMessage).toBeVisible({timeout: 10000});
            logger.info(`Flash message is visible: ${selector}`);

            // Validate text content
            await expect(flashMessage).toContainText(expectedText);
            logger.info(`Flash message text "${expectedText}" is correct`);
        } catch (error) {
            logger.error(`Error verifying flash message (${expectedText}): ${error}`);
            throw error;
        }
    }

    async validateErrorMessage(message: string) {
        await this.verifyFlashMessage(this.divFlashMessage, message);
    }
}