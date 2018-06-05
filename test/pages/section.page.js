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
            account: '//img[@title="Accounts"] | //a[@title="Accounts"]/child::span/child::span',
            contacts: '//img[@title="Contacts"] | //a[@title="Contacts"]/child::span/child::span',
            opportunity: '//img[@title="Opportunities"] | //a[@title="Opportunities"]/child::span/child::span'
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
        browser.pause(3000);
        commonActions.clickWebElement(section);
        if(isClassic){
             commonActions.closePopMessage(this.lightningMessage.message, this.lightningMessage.closeButton);
        }
        else{
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
