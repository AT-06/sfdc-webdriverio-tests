'use strict';
let config = require('../../config');
let commonActions = require('../utils/CommonActions.js');
let isClassic = config.theme.toString().toLowerCase() === 'classic';

/**
 * Page Object of Content.
 */
class Content {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.newButton = 'input[title="New"]';//'//a[@title="New"]/child::div';
        this.editButton = 'input[title="Edit"]';// '//a[@title="Edit"]/child::div';
        this.deleteButton = 'input[title="Delete"]'; //'div.branding-actions.actionMenu.popupTargetContainer.uiPopupTarget.uiMenuList.forceActionsDropDownMenuList.uiMenuList--left.uiMenuList--default.visible.positioned > div > ul > li:nth-child(6) > a';
        this.nameOnContent = '.topName'; //'.testonly-outputNameWithHierarchyIcon .uiOutputText';
        this.lastElementOnList = '//a[text()="{}"]';// no need
        this.dropDownMenu = '//div[@title="New Note"]/parent::a/parent::li/following-sibling::li';
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
     * Method to click element on list.
     * @param element css locator.
     * @param keyLocatorOnList key on list.
     */
    clickLastElementOnList(element, keyLocatorOnList) {
        commonActions.clickLastElementOnList(element, keyLocatorOnList);
    }

    /**
     * Method to select a element and edit this.
     * @param element to modify
     */
    selectElementAndEditThis(element) {
        this.clickLastElementOnList(element, this.lastElementOnList);
        this.clickOnEditButton();
    }

    /**
     * Method to select a element and delete this.
     * @param element to delete
     */
    selectElementAndDeleteThis(element) {

        this.clickLastElementOnList(element, this.lastElementOnList);
        if (isClassic) {
            this.clickOnDeleteButton();
            commonActions.confirmAlert();
        }
        else {
            commonActions.clickWebElement(this.dropDownMenu);
            this.clickOnDeleteButton();
            commonActions.clickWebElement(this.deleteConfirmButton);
        }
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
        return commonActions.isElementOnList(nameToVerify, this.lastElementOnList);
    }
}

module.exports = Content;
