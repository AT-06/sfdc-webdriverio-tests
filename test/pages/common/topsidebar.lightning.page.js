let commonActions = require('../../utils/commonActions');
let sectionPage = require('./section.page');

class TopSideBarLightning {
    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.switchThemeToLight = 'a[class="switch-to-lightning"]';

    }

    /**
     * Method to get if is lightning theme.
     * @return Boolean true is lightning theme.
     */
    isLightning() {
        return commonActions.isThemeLightning();
    }

    /**
     * Method to switch to Lightning Theme.
     */
    validateToSwitch() {
        if (!this.isLightning()) {
            commonActions.clickWebElement(this.switchThemeToLight)
            commonActions.waitToLightningBear();
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

module.exports = new TopSideBarLightning();