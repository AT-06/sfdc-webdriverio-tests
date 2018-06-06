'use strict';
const config = require('../../../config');
const isClassic = config.theme.toString().toLowerCase() === 'classic';
let commonActions = require("../../utils/CommonActions");
let Form = require('../form.page');

/**
 * Page Object of Account Form.
 */
class AccountForm extends Form {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        super();
        // Selector of Account Information.
        this.elementOnComboBox = '//a[@title="{}"] | //option[@value="{}"]';
        this.autoCompleterButtonOnClassic = '//input[contains(@id,"acc3")]/following-sibling::a';
        this.autoCompleterOnLightning = '//div[@title="{}"]/parent::div/preceding-sibling::div';
        this.accountInformation = {
            name: '//span[text()="Account Name"]/parent::label/following-sibling::input | //input[@id="acc2"]',
            parent: '//span[text()="Parent Account"]/parent::label/following-sibling::div/descendant::input | //input[@id="acc3"]',
            number: '//span[text()="Account Number"]/parent::label/following-sibling::input | //input[@id="acc5"]',
            site: '//span[text()="Account Site"]/parent::label/following-sibling::input | //input[@id="acc23"]',
            type: '//span[text()="Type"]/parent::span/following-sibling::div/descendant::a | //select[@id="acc6"]',
            industry: '//span[text()="Industry"]/parent::span/following-sibling::div/descendant::a | //select[@id="acc7"]',
            annualRevenue: '//span[text()="Annual Revenue"]/parent::label/following-sibling::input | //input[@id="acc8"]',
            rating: '//span[text()="Rating"]/parent::span/following-sibling::div/descendant::a | //select[@id="acc9"]',
            phone: '//span[text()="Phone"]/parent::label/following-sibling::input | //input[@id="acc10"]',
            fax: '//span[text()="Fax"]/parent::label/following-sibling::input | //input[@id="acc11"]',
            website: '//span[text()="Website"]/parent::label/following-sibling::input | //input[@id="acc12"]',
            tickerSymbol: '//span[text()="Ticker Symbol"]/parent::label/following-sibling::input | //input[@id="acc13"]',
            ownership: '//span[text()="Ownership"]/parent::span/following-sibling::div/descendant::a | //select[@id="acc14"]',
            employees: '//span[text()="Employees"]/parent::label/following-sibling::input | //input[@id="acc15"]',
            sicCode: '//span[text()="SIC Code"]/parent::label/following-sibling::input | //input[@id="acc16"]'
        };
    }

    /**
     * Method to fill all account information.
     */
    fillAccountWithAllFieldsAndSave(accountData) {
        commonActions.setInputTextField(this.accountInformation.name, accountData.name);
        if(isClassic){
            commonActions.selectOnAutoCompleterTextField(this.accountInformation.parent, accountData.parent, this.autoCompleterButtonOnClassic);
        }
        else{
            commonActions.selectOnAutoCompleterTextField(this.accountInformation.parent, accountData.parent, this.autoCompleterOnLightning);
        }
        commonActions.setInputTextField(this.accountInformation.number, accountData.number);
        commonActions.setInputTextField(this.accountInformation.site, accountData.site);
        commonActions.selectOnComboBox(this.accountInformation.type, accountData.type, this.elementOnComboBox);
        commonActions.selectOnComboBox(this.accountInformation.industry, accountData.industry, this.elementOnComboBox);
        commonActions.setInputTextField(this.accountInformation.annualRevenue, accountData.annualRevenue);
        commonActions.selectOnComboBox(this.accountInformation.rating, accountData.rating, this.elementOnComboBox);
        commonActions.setInputTextField(this.accountInformation.phone, accountData.phone);
        commonActions.setInputTextField(this.accountInformation.fax, accountData.fax);
        commonActions.setInputTextField(this.accountInformation.website, accountData.website);
        commonActions.setInputTextField(this.accountInformation.tickerSymbol, accountData.tickerSymbol);
        commonActions.selectOnComboBox(this.accountInformation.ownership, accountData.ownership, this.elementOnComboBox);
        commonActions.setInputTextField(this.accountInformation.employees, accountData.employees);
        commonActions.setInputTextField(this.accountInformation.sicCode, accountData.sicCode);

        // click on save button
        this.clickOnSaveButton();
        if(isClassic){
            // add 2nd assert on
        }
        else{
            commonActions.pauseInSeconds(2); // improve until wait to green message
        }

    }

    /**
     * Method to fill only name of an account.
     */
    fillAccountWithRequiredFieldsAndSave(accountName) {
        commonActions.setInputTextField(this.accountInformation.name, accountName);
        this.clickOnSaveButton();
        commonActions.pauseInSeconds(2); // improve until wait to green message
    }

}

module.exports = new AccountForm();
