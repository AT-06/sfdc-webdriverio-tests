'use strict';

const commonActions = require('../../core/ui/commonActions');
const sectionPage = require('./section.po');

class TopSideBarClassic {

    /**
     * Method to get if is lightning theme.
     * @return Boolean true is lightning theme.
     */
    static isLightning() {
        return commonActions.isThemeLightning();
    }

    /**
     * Method to switch to Classic Theme.
     */
    static validateToSwitch() {
        if (this.isLightning()) {
            commonActions.click('.branding-user-profile');
            commonActions.click('//div[@class="profile-card-footer"]/child::a');
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

module.exports = TopSideBarClassic;
