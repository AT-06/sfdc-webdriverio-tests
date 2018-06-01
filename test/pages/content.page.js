'use strict';
let commonActions = require('../utils/CommonActions.js');

/**
 * Page Object of Content.
 */
class Content {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.newButton = 'input[title="New"]';
        this.editButton = 'input[title="Edit"]';
        this.deleteButton = 'input[title="Delete"]';
        this.nameOnContent = '.topName';
        this.listOnContent = '//tr[@class="headerRow"]/parent::tbody';
    }

    /**
     * Method to click on New button.
     */
    clickOnNewButton() {
        commonActions.clickWebElement(this.newButton);
    }

    /**
     * Method to click on Edit button.
     */
    clickOnEditButton() {
        commonActions.clickWebElement(this.editButton);
    }

    /**
     * Method to click on Delete button.
     */
    clickOnDeleteButton() {
        commonActions.clickWebElement(this.deleteButton);
    }

    /**
     * Method to click element on list.
     */
    clickElementOnList(element) {
        commonActions.clickElementOnList(this.listOnContent, element);
    }

    /**
     * Method to select a element and edit this.
     * @param element to modify
     */
    selectElementAndEditThis(element) {
        this.clickElementOnList(element);
        this.clickOnEditButton();
    }

    /**
     * Method to select a element and delete this.
     * @param element to delete
     */
    selectElementAndDeleteThis(element) {
        this.clickElementOnList(element);
        this.clickOnDeleteButton();
        commonActions.confirmAlert();
    }

    /**
     * Method to verify on content.
     *
     * @param nameToVerify name to verify.
     * @return boolean is present on element
     */
    isNameOnContent(nameToVerify) {
        return commonActions.isPresentOnElement(this.nameOnContent, nameToVerify);
    }

    isNameOnList(nameToVerify) {
        return commonActions.isElementOnList(this.listOnContent, nameToVerify);
    }
}

module.exports = Content;
