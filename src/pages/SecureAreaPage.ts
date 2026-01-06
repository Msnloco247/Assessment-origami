import { Page, expect } from "@playwright/test";
import { logger } from "../utils/loggerUtil";

export default class SecureAreaPage {

    // SECURE AREA PAGE ELEMENTS
    private readonly divFlashMessage = '#flash';

    constructor(private page: Page) { }

    // SECURE AREA PAGE METHODS
    
    //verify the flash mesagge after login
    private async verifyFlashMessage(selector: string, expectedText: string) {
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

    // Verify successful login message
    async expectMessageLogged() {
        await this.verifyFlashMessage(this.divFlashMessage, 'You logged into a secure area!');
    }


}
