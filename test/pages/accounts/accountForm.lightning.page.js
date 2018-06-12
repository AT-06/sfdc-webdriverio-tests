'use strict';
let AccountBase = require('./accountBaseForm.page');

class AccountLightningForm extends AccountBase {
    constructor() {
        super();
        this.elementOnComboBox = '//a[@title="{}"]';
        this.accountInformation = {
            name: '//span[text()="Account Name"]/parent::label/following-sibling::input',
            parent: '//span[text()="Parent Account"]/parent::label/following-sibling::div/descendant::input',
            number: '//span[text()="Account Number"]/parent::label/following-sibling::input',
            site: '//span[text()="Account Site"]/parent::label/following-sibling::input',
            type: '//span[text()="Type"]/parent::span/following-sibling::div/descendant::a',
            industry: '//span[text()="Industry"]/parent::span/following-sibling::div/descendant::a',
            annualRevenue: '//span[text()="Annual Revenue"]/parent::label/following-sibling::input',
            rating: '//span[text()="Rating"]/parent::span/following-sibling::div/descendant::a',
            phone: '//span[text()="Phone"]/parent::label/following-sibling::input',
            fax: '//span[text()="Fax"]/parent::label/following-sibling::input',
            website: '//span[text()="Website"]/parent::label/following-sibling::input',
            tickerSymbol: '//span[text()="Ticker Symbol"]/parent::label/following-sibling::input',
            ownership: '//span[text()="Ownership"]/parent::span/following-sibling::div/descendant::a',
            employees: '//span[text()="Employees"]/parent::label/following-sibling::input',
            sicCode: '//span[text()="SIC Code"]/parent::label/following-sibling::input'
        };
    }

    fillAccountFields(accountData) {
        this.fillAccountWithAllFieldsAndSave(this.accountInformation, accountData, this.elementOnComboBox);
    }

}

module.exports = new AccountLightningForm();