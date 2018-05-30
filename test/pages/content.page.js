'use strict';
let commonActions = require('../utils/CommonActions.js');

/**
 * Page Object of Content.
 */
class Content {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.section = {
            account: 'a.accountBlock',
            contacts: 'a.contactBlock',
            opportunity: 'a.opportunityBlock',
        };
        this.newButton = 'input[name="new"]';
    }

    /**
     * Method to click on login button.
     * @param section to go.
     */
    clickOnSectionButton(section) {
        switch (section) {
            case 'accounts':
                commonActions.clickWebElement(this.section.account);
                break;
            case 'contacts':
                commonActions.clickWebElement(this.section.contacts);
                break;
            case 'opportunity':
                commonActions.clickWebElement(this.section.opportunity);
                break;
        }
    }

    /**
     * Method to click on New button.
     */
    clickOnNewButton() {
        commonActions.clickWebElement(this.newButton);
    }
}

module.exports = Content;

