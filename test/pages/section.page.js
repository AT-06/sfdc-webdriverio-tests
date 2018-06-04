'use strict';
let config = require('../../config.json');
let commonActions = require('../utils/CommonActions.js');
let isClassic = config.theme.toString().toLowerCase() === 'classic';

/**
 * Page Object of dynamic Sections.
 */
class Section {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.section = {
            account: 'a.accountBlock', // 'a[title="Accounts"]>span>span'
            contacts: 'a.contactBlock',// 'a[title="Contacts"]>span>span'
            opportunity: 'a.opportunityBlock'//'a[title="Opportunities"]>span>span'
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
        commonActions.waitElementToReady(section);
        commonActions.clickWebElement(section);
        commonActions.closePopMessage(this.lightningMessage.message, this.lightningMessage.closeButton);
    }

    /**
     * Method to click on lo
     * gin button.
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
