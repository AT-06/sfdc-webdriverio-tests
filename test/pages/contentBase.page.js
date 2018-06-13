'use strict';
let commonActions = require('../utils/CommonActions.js');

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
    clickLastElementOnList(element) {
        let lastElementOnList = `//a[text()="${element}"]`;
        commonActions.clickWebElement(lastElementOnList);
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