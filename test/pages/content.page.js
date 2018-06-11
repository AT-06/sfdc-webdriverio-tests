'use strict';
const config = require('../../config');
const isClassic = config.theme.toString().toLowerCase() === 'classic';
let commonActions = require('../utils/CommonActions.js');

/**
 * Page Object of Content.
 */
class Content {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.newButton = {
            classic: '//input[@title="New"]',
            lightning: '//a[@title="New"]/child::div'
        };
        this.editButton = {
            classic: '//input[@title="Edit"]',
            lightning: '//ul[@class="scrollable"]/child::li/child::a[@title="Edit"]'
        };
        this.deleteButton = {
            classic: '//input[@title="Delete"]',
            lightning: '//ul[@class="scrollable"]/child::li/child::a[@title="Delete"]'
        };
        this.nameOnContent = '.topName , .testonly-outputNameWithHierarchyIcon .uiOutputText';
        this.lastElementOnList = '//a[text()="{}"]';
        this.dropDownMenu = '//div[@title="New Note"]/parent::a/parent::li/following-sibling::li';
        this.deleteConfirmButton = '//span[text()="Delete"]';
    }

    /**
     * Method to click on New button.
     */
    clickOnNewButton() {
        let selector = commonActions.getSelector(this.newButton);
        commonActions.clickWebElement(selector);
    }

    /**
     * Method to click on Edit button.
     */
    clickOnEditButton() {
        let selector = commonActions.getSelector(this.editButton);
        commonActions.clickWebElement(selector);
    }

    /**
     * Method to click on Delete button.
     */
    clickOnDeleteButton() {
        let selector = commonActions.getSelector(this.deleteButton);
        commonActions.clickWebElement(selector);
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
        if (isClassic) {
            this.clickOnEditButton();
        }
        else {
            commonActions.clickWebElement(this.dropDownMenu);
            this.clickOnEditButton();
        }
        commonActions.pauseInSeconds(2);
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
        commonActions.pauseInSeconds(2);
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

    /**
     * Method to verify on List.
     *
     * @param nameToVerify name to verify.
     * @return boolean is present on element
     */
    isNameOnList(nameToVerify) {
        return commonActions.isElementOnList(nameToVerify, this.lastElementOnList);
    }
}

module.exports = new Content();
