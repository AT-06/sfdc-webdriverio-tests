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
     * Method to wait a element.
     * @param elementCSS1 WebElement locator.
     * @param elementCSS2 WebElement locator.
     */
    static waitElements(elementCSS1, elementCSS2) {
        browser.waitUntil(function () {
            return browser.isExisting(elementCSS1)
                || browser.isExisting(elementCSS2);
        }, timeToWait);
    }

    /**
     * Method to persist click on element.
     * @param elementCSS WebElement locator.
     */
    static clickAndExpectElement(elementCSS) {
        browser.waitUntil(function () {
            return browser.click(elementCSS);
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
     * @param elementName .
     * @param keyLocatorOnList .
     */
    static isElementOnList(elementName, keyLocatorOnList) {
        let elementToVerify = format(keyLocatorOnList, elementName);
        return browser.isExisting(elementToVerify)
    }

    /**
     * @param elementName element to to search and click on list.
     * @param keyLocatorOnList key locator on list.
     */
    static clickLastElementOnList(elementName, keyLocatorOnList) {
        let elementToClick = format(keyLocatorOnList, elementName);
        browser.pause(2000);
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
        browser.waitForExist('div[class="auraLoadingBox oneLoadingBox loadingHide"]', 30000);
    }

    /**
     * Method to verify is currently theme is Classic.
     * @param logo is to identify theme.
     * @return Boolean true if currently theme is Classic false is not.
     */
    static isCurrentThemeClassic(logo) {
        this.waitElements(logo.classic, logo.light);
        return browser.isVisible(logo.classic);
    }

    static getSelector(selector) {
        this.waitElements(selector.classic, selector.lightning);
        return browser.isVisible(selector.classic) ? selector.classic : selector.lightning;
    }

    static pauseInSeconds(time) {
        browser.pause(time * 1000);
    }

}

module.exports = CommonActions;
