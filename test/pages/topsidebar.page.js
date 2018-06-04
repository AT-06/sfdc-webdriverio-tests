'use strict';
let config = require('../../config.json');
let commonActions = require('../utils/CommonActions');
let sectionPage = require('./section.page');
let isClassic = config.theme.toString().toLowerCase() === 'classic';

/**
 * Page Object of TopSide Bar.
 */
class TopSideBar {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.plusButton = '//li[@id="AllTab_Tab"]/a';//'//div[@class="slds-icon-waffle"]';
        this.logo = {
            classic: 'img[title="Salesforce.com"]',
            light: 'div[class="slds-global-header__logo"]'
        };
        this.switchTheme = {
            toLightning: '//a[@class="switch-to-lightning"]',
            toClassic: '//div[@class="profile-card-footer"]/child::a'
        };
        this.accountButton = '//img[@title="User"]';
    }

    /**
     * Method to click on login button.
     */
    clickOnPlusButton() {
        if (!isClassic) {
            commonActions.waitElementToReady(this.plusButton);
        }
        commonActions.clickWebElement(this.plusButton);

    }

    /**
     * Method to go to section using Section PageObject.
     */
    clickOnSection(section) {
        sectionPage.clickOnSectionButton(section);

    }

    /**
     * Method to get if is classic theme.
     * @return Boolean true is classic theme, false is not classic theme.
     */
    getTheme() {
        return commonActions.isCurrentThemeClassic(this.logo);
    }

    /**
     * Method to switch to Classic Theme.
     */
    switchToClassicTheme() {
        if (!Boolean(this.getTheme())) {
            commonActions.clickWebElement(this.accountButton);
            commonActions.clickWebElement(this.switchTheme.toClassic);

        }
    }

    /**
     * Method to switch to Lightning Theme.
     */
    switchToLightningTheme() {
        if (this.getTheme()) {
            commonActions.clickWebElement(this.switchTheme.toLightning);
        }
    }

    /**
     * Method to close spam on Lightning theme.
     */
    closeSpamOnLightningTheme() {
        if (!isClassic) {
            commonActions.waitToLightningBear();
        }
    }

    /**
     * Method to validate Theme.
     */
    validateTheme() {
        if (isClassic) {
            this.switchToClassicTheme();
        }
        else {
            this.switchToLightningTheme();
        }
    }

    /**
     * Method to go to Section.
     */
    goToSection(section) {
        this.validateTheme();
        this.closeSpamOnLightningTheme();
        this.clickOnPlusButton();
        this.clickOnSection(section);
    }
}

module.exports = new TopSideBar();
