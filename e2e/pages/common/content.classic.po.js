'use strict';

const commonActions = require('../../core/ui/commonActions');
const ContentBase = require('./contentBase.po');

class ContentClassic extends ContentBase {
    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        super();
        this.newButton = '//input[@title="New"]';
        this.editButton = '//input[@title="Edit"]';
        this.deleteButton = '//input[@title="Delete"]';
    }

    /**
     * Method to click on New button.
     */
    clickOnNewButton() {
        commonActions.click(this.newButton);
    }

    /**
     * Method to click on Edit button.
     */
    clickOnEditButton() {
        commonActions.click(this.editButton);
    }

    /**
     * Method to click on Delete button.
     */
    clickOnDeleteButton() {
        commonActions.click(this.deleteButton);
    }

    /**
     * Method to click to confirm Delete button.
     */
    clickOnConfirmDelete() {
        commonActions.confirmAlert();
    }

    /**
     * Method to select a element and edit this.
     * @param element to modify
     */
    selectElementAndEditThis(element) {
        this.clickLastElementOnList(element);
        this.clickOnEditButton();
    }

    /**
     * Method to click element on list.
     * @param element css locator.
     */
    clickLastElementOnList(element) {
        this.clickLastElementOnTheList(element);
    }

    /**
     * Method to select a element and delete this.
     * @param element to delete
     */
    selectElementAndDeleteThis(element) {
        this.clickLastElementOnList(element);
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
        return commonActions.isExisting(this.getLastElementOnTheList(nameToVerify));
    }
}

module.exports = new ContentClassic();
