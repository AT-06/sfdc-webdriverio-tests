'use strict';
let commonActions = require('../utils/CommonActions');
let sectionPage = require('./section.page');

/**
 * Page Object of TopSide Bar.
 */
class TopSideBar {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.plusButton = '#AllTab_Tab';
    }

    /**
     * Method to click on login button.
     */
    clickOnPlusButton() {
        commonActions.clickWebElement(this.plusButton);

    }

    /**
     * Method to go to section using Section PageObject.
     */
    clickOnSection(section) {
        sectionPage.clickOnSectionButton(section);

    }

    /**
     * Method to go to Section.
     */
    goToSection(section) {
        this.clickOnPlusButton();
        this.clickOnSection(section);
    }
}

module.exports = new TopSideBar();

