'use strict';
const format = require('string-format');

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

    /**
     * @param elementCss comboBox.
     * @param elementToSelect select text on comboBox.
     */
    static selectOnComboBox(elementCss, elementToSelect) {
        this.clickWebElement(elementCss);
        let css = format('option[value="{}"]', elementToSelect);
        this.clickWebElement(css);
    }

    /**
     * @param elementCSS list.
     * @param elementName elemen to to search on list.
     */
    static getElementOnList(elementCSS, elementName) {
        let elementToReturn = '';
        this.getElement(elementCSS).elements('a').value.forEach(element => {
            if (element.getText().includes(elementName)) {
                elementToReturn = element;
            }
        });
        return elementToReturn;
    }

    /**
     * @param elementCSS list.
     * @param elementName element to to search and click on list.
     */
    static isElementOnList(elementCSS, elementName) {
        let elementToClick = this.getElementOnList(elementCSS, elementName);
        return elementToClick !== '';
    }

    /**
     * @param elementCSS list.
     * @param elementName element to to search and click on list.
     */
    static clickElementOnList(elementCSS, elementName) {
        let elementToClick = this.getElementOnList(elementCSS, elementName);
        elementToClick.click();
    }

    /**
     * Confirm delete action on alert.
     */
    static confirmAlert() {
        if (browser.alertText()) {
            browser.alertAccept();
        }
    }

    /**
     * @param message popup message.
     * @param closeButton close button on popup message.
     */
    static closePopMessage(message, closeButton) {
        if (browser.isVisible(message)) {
            this.clickWebElement(closeButton);
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
     * @param elementCss auto completer textField.
     * @param textToSelect select text on autoCompleter.
     */
    static selectOnAutoCompleterTextField(elementCss, textToSelect) {
        this.setInputTextField(elementCss, textToSelect);
        this.clickWebElement('//input[contains(@id,"acc3")]/following-sibling::a');
        this.autoCompleterClassicTheme(textToSelect);
    }


    /**
     * @param textToSelect select text on autoCompleter.
     */
    static autoCompleterClassicTheme(textToSelect) {


        let handle = browser.getTabIds();

        //  WEB_DRIVER.switchTo().frame("resultsFrame");

        console.log(browser.getTitle());
        browser.switchTab(handle[1]);
        console.log(browser.getTitle());
        let css = format('//a[text()="{}"]', textToSelect);

        let tab = browser.execute("return (document.getElementById('frame_15').getSVGDocument().getElementsByTagName('g')[8])", this.elements.embedFrame);

        console.log(css);
        this.clickWebElement(css);
        browser.switchTab(handle[0]);
        console.log(browser.getTitle());
        browser.pause(10000);
    }


}

module.exports = CommonActions;
