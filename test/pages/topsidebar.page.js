'use strict';
let commonActions = require('../utils/CommonActions.js');

/**
 * Page Object of TopSide Bar.
 */
class TopSideBar {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.plusButton = '#AllTab_Tab';
        this.section = {
            account: 'a.accountBlock',
            contacts: 'a.contactBlock',
            opportunity: 'a.opportunityBlock',
        }
    }

    /**
     * Method to click on login button.
     */
    clickOnPlusButton() {
        commonActions.clickWebElement(this.plusButton);

    }
}

module.exports = new TopSideBar();

