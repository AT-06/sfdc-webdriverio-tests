'use strict';
const timeToWait = 30000;

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
            return browser.isVisible(elementCSS) && browser.isExisting(elementCSS);
        }, timeToWait);
    }

    /**
     * Method to click on element.
     * @param elementCSS WebElement locator.
     */
    static clickWebElement(elementCSS) {
        this.waitElement(elementCSS, timeToWait);
        this.moveToComponent(elementCSS);
        browser.element(elementCSS).click();
    }

    /**
     * Method to return a element.
     * @param elementCSS WebElement locator.
     * @returns WebElement.
     */
    static getElement(elementCSS) {
        this.waitElement(elementCSS, timeToWait);
        return browser.element(elementCSS);
    }

    /**
     * Method to set WebElement value.
     * @param elementCSS WebElement locator.
     */
    static setInputTextField(elementCSS, value) {
        this.waitElement(elementCSS, timeToWait);
        this.moveToComponent(elementCSS);
        browser.element(elementCSS).setValue(value);
    }

    /**
     * Method to move focus to WebElement.
     * @param elementCss WebElement locator.
     */
    static moveToComponent(elementCss) {
        this.waitElement(elementCss, timeToWait);
        browser.moveToObject(elementCss);
    }

}

module.exports = CommonActions;
