'use strict';

const commonActions = require('../../core/ui/commonActions');

/**
 * Page Object of dynamic Sections.
 */
class Section {

    /**
     * Method to click on section
     * @param section to go.
     */
    static clickOnSectionButton(section) {
        if (theme === 'classic') {
            let sectionElement = `//img[@title="${section}"]/parent::a`;
            commonActions.click(sectionElement);
            commonActions.closePopMessage();
        } else {
            let sectionElement = `//a[@title="${section}"]/child::span/child::span`;
            commonActions.click(sectionElement);
        }
    }

    /**
     * Method to click on plus button
     */
    static clickOnPlusSectionButton() {
        if (theme === 'classic') {
            let plusButton = '//li[@id="AllTab_Tab"]/a';
            commonActions.click(plusButton);
        } else {
            let plusButton = '//div[@class="slds-icon-waffle"]/child::div';
            commonActions.click(plusButton);
        }
    }

}

module.exports = Section;
