'use strict';
let AccountBase = require('./accountBaseForm.page');

class AccountClassicForm extends AccountBase {
    constructor() {
        super();
        this.elementOnComboBox = '//a[@title="{}"]';
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

    fillAccountFields(accountData) {
        this.fillAccountWithAllFieldsAndSave(this.accountInformation, accountData, this.elementOnComboBox);
    }

}

module.exports = new AccountClassicForm();