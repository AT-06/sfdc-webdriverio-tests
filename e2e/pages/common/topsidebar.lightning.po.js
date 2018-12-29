'use strict';

const commonActions = require('../../core/ui/commonActions');
const sectionPage = require('./section.po');

class TopSideBarLightning {

    /**
     * Method to get if is lightning theme.
     * @return Boolean true is lightning theme.
     */
    static isLightning() {
        return commonActions.isThemeLightning();
    }

    /**
     * Method to switch to Lightning Theme.
     */
    static validateToSwitch() {
        if (!this.isLightning()) {
            commonActions.click('a[class="switch-to-lightning"]');
            commonActions.waitToLightningBear();
        }
    }

    /**
     * Method to go to Section.
     */
    static goToSection(section) {
        this.validateToSwitch();
        sectionPage.clickOnPlusSectionButton();
        sectionPage.clickOnSectionButton(section);
    }
}

module.exports = TopSideBarLightning;
