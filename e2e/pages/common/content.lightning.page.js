'use strict';
let commonActions = require('../../core/ui/commonActions.js');
let ContentBase = require('./contentBase.page');

class ContentLightning extends ContentBase {
    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        super();
        this.newButton = '//a[@title="New"]/child::div';
        this.editButton = '//ul[@class="scrollable"]/child::li/child::a[@title="Edit"]';
        this.deleteButton = '//ul[@class="scrollable"]/child::li/child::a[@title="Delete"]';
        this.dropDownMenu = '//a[@class="slds-grid slds-grid--vertical-align-center slds-grid--align-center ' +
            'sldsButtonHeightFix" and not(@title="Show one more action")]';
        this.deleteConfirmButton = '//span[text()="Delete"]';
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
     * Method to click on Delete button.
     */
    clickOnDropDownButton() {
        commonActions.clickWebElement(this.dropDownMenu);
    }

    /**
     * Method to click to confirm Delete button.
     */
    clickOnConfirmDelete() {
        commonActions.clickWebElement(this.deleteConfirmButton);
    }

    /**
     * Method to click element on list.
     * @param element css locator.
     */
    clickLastElementOnList(element) {
        this.clickLastElementOnTheList(element);
    }

    /**
     * Method to select a element and edit this.
     * @param element to modify
     */
    selectElementAndEditThis(element) {
        this.clickLastElementOnList(element);
        this.clickOnDropDownButton();
        this.clickOnEditButton();
    }

    /**
     * Method to select a element and delete this.
     * @param element to delete
     */
    selectElementAndDeleteThis(element) {
        this.clickLastElementOnList(element);
        this.clickOnDropDownButton();
        this.clickOnDeleteButton();
        this.clickOnConfirmDelete();
    }

    /**
     * Method to verify on content.
     *
     * @param nameToVerify name to verify.
     * @return boolean is present on element
     */
    isNameOnContent(nameToVerify) {
        return this.isNameOnContentList(nameToVerify);
    }
    /**
     * Method to verify on List.
     *
     * @param nameToVerify name to verify.
     * @return boolean is present on element
     */
    existOnList(nameToVerify) {
        return commonActions.elementExist(this.getLastElementOnTheList(nameToVerify));
    }

}

module.exports = new ContentLightning();
