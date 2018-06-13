'use strict';
const format = require('string-format');
const timeToWait = 30000;
const config = require('../../config');

/**
 * CommonActions class with CommonActions Methods.
 */
class CommonActions {

    /**
     * Method to wait a element.
     * @param elementCSS WebElement locator.
     */
    static waitElement(elementCSS) {
        browser.waitUntil(function () {
            return browser.isVisible(elementCSS)
                && browser.isExisting(elementCSS);
        }, timeToWait);
    }


    /**
     * Method to click on element.
     * @param elementCSS WebElement locator.
     */
    static clickWebElement(elementCSS) {
        this.moveToComponent(elementCSS);
        browser.click(elementCSS);

    }

    /**
     * Method to return a element.
     * @param elementCSS WebElement locator.
     * @returns WebElement.
     */
    static getElement(elementCSS) {
        this.waitElement(elementCSS);
        return browser.element(elementCSS);
    }

    /**
     * Method to set WebElement value.
     * @param elementCSS WebElement locator.
     */
    static setInputTextField(elementCSS, value) {
        this.waitElement(elementCSS);
        this.moveToComponent(elementCSS);
        browser.element(elementCSS).setValue(value);
    }

    /**
     * Method to move focus to WebElement.
     * @param elementCss WebElement locator.
     */
    static moveToComponent(elementCss) {
        this.waitElement(elementCss);
        browser.moveToObject(elementCss);
    }

    /**
     * @param elementCss comboBox.
     * @param elementToSelect select text on comboBox.
     */
    static selectOnComboBox(elementCss, elementToSelect, elementOnComboBox) {
        this.clickWebElement(elementCss);
        let css = format(elementOnComboBox, elementToSelect, elementToSelect);
        this.clickWebElement(css);
    }

    /**
     * @param elementName element to to search and click on list.
     * @param keyLocatorOnList key locator on list.
     */
    static clickLastElementOnList(elementName, keyLocatorOnList) {
        let elementToClick = format(keyLocatorOnList, elementName);
        this.pauseInSeconds(2);
        this.clickWebElement(elementToClick);
    }

    /**
     * Confirm delete action on alert at Classic Theme.
     */
    static confirmAlert() {
        if (browser.alertText()) {
            browser.alertAccept();
        }
    }

    /**
     * @param elementCss element.
     * @param textToVerify text to verify.
     */
    static isPresentOnElement(elementCss, textToVerify) {
        return this.getElement(elementCss).getText().toString() === textToVerify;
    }

    /**
     * Method to wait spam bear after login on Lightning theme.
     */
    static waitToLightningBear() {
        this.pauseInSeconds(3);
        browser.waitForExist('div[class="auraLoadingBox oneLoadingBox loadingHide"]', timeToWait);
    }

    /**
     * Method to verify is element visible.
     * @return Boolean true if the url contains lightning.
     */
    static isThemeLightning() {
        this.pauseInSeconds(4);
        return browser.getUrl().includes('lightning');
    }

    /**
     * Method to pause the browser.
     */
    static pauseInSeconds(time) {
        browser.pause(time * 1000);
    }

}

module.exports = CommonActions;
