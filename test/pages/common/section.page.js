'use strict';
let commonActions = require('../../utils/commonActions.js');

/**
 * Page Object of dynamic Sections.
 */
class Section {

    /**
     * Method to click on section
     * @param section to go.
     */
    clickOnSectionButton(section) {
        if (theme == 'classic') {
            let sectionElement = `//img[@title="${section}"]/parent::a`;
            commonActions.clickWebElement(sectionElement);
        }
        else {
            let sectionElement = `//a[@title="${section}"]/child::span/child::span`;
            commonActions.clickWebElement(sectionElement);
        }
    }

    /**
     * Method to click on plus button
     */
    clickOnPlusSectionButton() {
        if (theme == 'classic') {
            let plusButton = '//li[@id="AllTab_Tab"]/a';
            commonActions.clickWebElement(plusButton);
        }
        else {
            let plusButton = '//div[@class="slds-icon-waffle"]/child::div';
            commonActions.clickWebElement(plusButton);
        }
    }

}

module.exports = new Section();
