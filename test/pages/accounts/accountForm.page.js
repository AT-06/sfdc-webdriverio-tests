'use strict';

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
        this.accountInformation = {
            name: '#acc2',
            parent: '#acc3',
            number: '#acc5',
            site: '#acc23',
            type: '#acc6',
            industry: '#acc7',
            annualRevenue: '#acc8',
            rating: '#acc9',
            phone: '#acc10',
            fax: '#acc11',
            website: '#acc12',
            tickerSymbol: '#acc13',
            ownership: '#acc14',
            employees: '#acc15',
            sicCode: '#acc16'
        };
    }

    /**
     * Method to fill all account information.
     */
    fillAccountWithAllFieldsAndSave(accountData) {
        commonActions.setInputTextField(this.accountInformation.name, accountData.name);
        //  commonActions.selectOnAutoCompleterTextField(this.accountInformation.parent, accountData.parent);
        commonActions.setInputTextField(this.accountInformation.number, accountData.number);
        commonActions.setInputTextField(this.accountInformation.site, accountData.site);
        commonActions.selectOnComboBox(this.accountInformation.type, accountData.type);
        commonActions.selectOnComboBox(this.accountInformation.industry, accountData.industry);
        commonActions.setInputTextField(this.accountInformation.annualRevenue, accountData.annualRevenue);
        commonActions.selectOnComboBox(this.accountInformation.rating, accountData.rating);
        commonActions.setInputTextField(this.accountInformation.phone, accountData.phone);
        commonActions.setInputTextField(this.accountInformation.fax, accountData.fax);
        commonActions.setInputTextField(this.accountInformation.website, accountData.website);
        commonActions.setInputTextField(this.accountInformation.tickerSymbol, accountData.tickerSymbol);
        commonActions.selectOnComboBox(this.accountInformation.ownership, accountData.ownership);
        commonActions.setInputTextField(this.accountInformation.employees, accountData.employees);
        commonActions.setInputTextField(this.accountInformation.sicCode, accountData.sicCode);

        // click on save button
        this.clickOnSaveButton();
    }

    /**
     * Method to fill only name of an account.
     */
    fillAccountWithRequiredFieldsAndSave(accountName) {
        commonActions.setInputTextField(this.accountInformation.name, accountName);

        // click on save button
        this.clickOnSaveButton();
    }

}

module.exports = new AccountForm();
