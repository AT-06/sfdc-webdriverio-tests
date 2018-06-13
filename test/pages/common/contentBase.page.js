'use strict';
let commonActions = require('../../utils/commonActions.js');

class ContentBase {
    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.nameOnContent = '.topName , .testonly-outputNameWithHierarchyIcon .uiOutputText';
    }

    /**
     * Method to click element on list.
     * @param element css locator.
     */
    clickLastElementOnTheList(element) {
        commonActions.clickWebElement(this.getLastElementOnTheList(element));
    }
    /**
     * Method to get element on list.
     * @param element css locator.
     */
    getLastElementOnTheList(element) {
        return `//a[text()="${element}"]`;
    }
    /**
     * Method to verify on content.
     *
     * @param nameToVerify name to verify.
     * @return boolean is present on element
     */
    isNameOnContentList(nameToVerify) {
        return commonActions.isPresentOnElement(this.nameOnContent, nameToVerify);
    }

}

module.exports = ContentBase;