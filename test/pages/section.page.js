'use strict';
const config = require('../../config');
const isClassic = config.theme.toString().toLowerCase() === 'classic';
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
            account: {
                classic: '//img[@title="Accounts"]/parent::a',
                lightning: '//a[@title="Accounts"]/child::span/child::span'
            },
            contacts: {
                classic: '//img[@title="Contacts"]/parent::a',
                lightning: '//a[@title="Contacts"]/child::span/child::span'
            },
            opportunity: '//img[@title="Opportunities"]/parent::a | //a[@title="Opportunities"]/child::span/child::span'
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
        commonActions.pauseInSeconds(3);
        let finalSelector = commonActions.getSelector(section);
        commonActions.clickWebElement(finalSelector);
        if (isClassic) {
            commonActions.closePopMessage(this.lightningMessage.message, this.lightningMessage.closeButton);
        }
        else {
            commonActions.waitElement('//td[contains(@class,"slds-cell-edit")]/parent::tr/parent::tbody')
        }

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
