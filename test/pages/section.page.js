'use strict';
let commonActions = require('../utils/CommonActions.js');

/**
 * Page Object of dynamic Sections.
 */
class Section {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.section = {
            account: 'a.accountBlock',
            contacts: 'a.contactBlock',
            opportunity: 'a.opportunityBlock',
        };
        this.lightningMessage = {
            message: '#lexNoThanks',
            closeButton: '#tryLexDialogX'
        }
    }

    /**
     * Method to search section.
     * @param section to go.
     */
    lookingForSection(section) {
        commonActions.clickWebElement(section);
        commonActions.closePopMessage(this.lightningMessage.message, this.lightningMessage.closeButton);
    }

    /**
     * Method to click on login button.
     * @param section to go.
     */
    clickOnSectionButton(section) {
        switch (section) {
            case 'accounts':
                this.lookingForSection(this.section.account);
                break;
            case 'contacts':
                this.lookingForSection(this.section.contacts);
                break;
            case 'opportunity':
                this.lookingForSection(this.section.opportunity);
                break;
        }
    }
}

module.exports = new Section();
