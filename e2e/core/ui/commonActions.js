'use strict';

const EXPLICIT_TIMEOUT = 30000;

/**
 * CommonActions class with CommonActions Methods.
 */
class CommonActions {

    /**
     * Method to click on element.
     * @param elementCSS WebElement locator.
     */
    static click(elementCSS) {
        browser.$(elementCSS).waitForDisplayed(EXPLICIT_TIMEOUT);
        browser.$(elementCSS).click();
    }

    /**
     * Method to set WebElement value.
     * @param elementCSS WebElement locator.
     * @param value text.
     */
    static setValue(elementCSS, value) {
        browser.$(elementCSS).waitForDisplayed(EXPLICIT_TIMEOUT);
        browser.$(elementCSS).setValue(value);
    }

    /**
     * @param elementCss comboBox.
     * @param elementToSelect select text on comboBox.
     */
    static selectOnComboBox(elementCss, elementToSelect) {
        this.click(elementCss);
        let css = theme === 'classic' ? `option[value="${elementToSelect}"]` : `a[title="${elementToSelect}"]`;
        this.click(css);
    }

    /**
     * Confirm delete action on alert at Classic Theme.
     */
    static confirmAlert() {
        if (browser.getAlertText()) {
            browser.acceptAlert();
        }
    }

    /**
     * @param elementCss element.
     * @param textToVerify text to verify.
     */
    static isPresentOnElement(elementCss, textToVerify) {
        browser.$(elementCss).waitForDisplayed(EXPLICIT_TIMEOUT);
        return browser.$(elementCss).getText().toString() === textToVerify;
    }

    /**
     * Method to wait spam bear after login on Lightning theme.
     */
    static waitToLightningBear() {
        browser.$('div[class="auraLoadingBox oneLoadingBox loadingHide"]').waitForExist(EXPLICIT_TIMEOUT);
    }

    /**
     * Method to verify is url is lightning.
     * @return Boolean true if the url contains lightning.
     */
    static isThemeLightning() {
        return browser.getUrl().includes('lightning');
    }

    /**
     * Method to verify is element visible.
     * @return Boolean true if exits.
     */
    static isExisting(element) {
        return browser.$(element).isExisting();
    }

    /**
     * @param message popup message.
     * @param closeButton close button on popup message at Classic Theme.
     */
    static closePopMessage() {
        if (this.isExisting('#lexNoThanks')) {
            this.click('#tryLexDialogX');
        }
    }

}

module.exports = CommonActions;
