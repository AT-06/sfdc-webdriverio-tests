let commonActions = require('../../utils/commonActions');
let sectionPage = require('./section.page');

class TopSideBarClassic {
    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.userProfileLink = '.branding-user-profile';
        this.switchThemeToClassic = '//div[@class="profile-card-footer"]/child::a';

    }

    /**
     * Method to get if is lightning theme.
     * @return Boolean true is lightning theme.
     */
    isLightning() {
        return commonActions.isThemeLightning();
    }

    /**
     * Method to switch to Classic Theme.
     */
    validateToSwitch() {
        if (this.isLightning()) {
            commonActions.clickWebElement(this.userProfileLink);
            commonActions.clickWebElement(this.switchThemeToClassic);
        }
    }

    /**
     * Method to go to Section.
     */
    goToSection(section) {
        this.validateToSwitch();
        sectionPage.clickOnPlusSectionButton();
        sectionPage.clickOnSectionButton(section);
    }
}

module.exports = new TopSideBarClassic();