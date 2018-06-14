'use strict';
let AccountBase = require('./accountBaseForm.page');

class AccountClassicForm extends AccountBase {
    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        super();
        this.accountInformation = {
            name: '//input[@id="acc2"]',
            parent: '//input[@id="acc3"]',
            number: '//input[@id="acc5"]',
            site: '//input[@id="acc23"]',
            type: '//select[@id="acc6"]',
            industry: '//select[@id="acc7"]',
            annualRevenue: '//input[@id="acc8"]',
            rating: '//select[@id="acc9"]',
            phone: '//input[@id="acc10"]',
            fax: '//input[@id="acc11"]',
            website: '//input[@id="acc12"]',
            tickerSymbol: '//input[@id="acc13"]',
            ownership: '//select[@id="acc14"]',
            employees: '//input[@id="acc15"]',
            sicCode: '//input[@id="acc16"]'
        };
    }

    /**
     * Method to fill the account fields.
     * @param accountData the contact values.
     */
    fillAccountFields(accountData) {
        this.fillAccountWithAllFieldsAndSave(this.accountInformation, accountData);
    }

}

module.exports = new AccountClassicForm();