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
        this.elementOnComboBox = 'option[value="{}"]';// 'a[title="{}"]';

        this.accountInformation = {
            name: /*'//span[text()="Account Name"]/parent::label/following-sibling::input',*/'#acc2',
            parent: /* '//span[text()="Parent Account"]/parent::label/following-sibling::div',*/'#acc3',
            number: /* '//span[text()="Account Number"]/parent::label/following-sibling::input',*/'#acc5',
            site: /*'//span[text()="Account Site"]/parent::label/following-sibling::input',*/'#acc23',
            type: /*'//span[text()="Type"]/parent::span/following-sibling::div/descendant::a',*/'#acc6',
            industry: /*'//span[text()="Industry"]/parent::span/following-sibling::div/descendant::a',*/'#acc7',
            annualRevenue: /* '//span[text()="Annual Revenue"]/parent::label/following-sibling::input',*/'#acc8',
            rating: /* '//span[text()="Rating"]/parent::span/following-sibling::div/descendant::a',*/'#acc9',
            phone: /* '//span[text()="Phone"]/parent::label/following-sibling::input',*/'#acc10',
            fax: /*'//span[text()="Fax"]/parent::label/following-sibling::input',*/'#acc11',
            website: /* '//span[text()="Website"]/parent::label/following-sibling::input',*/'#acc12',
            tickerSymbol: /* '//span[text()="Ticker Symbol"]/parent::label/following-sibling::input',*/'#acc13',
            ownership: /*'//span[text()="Ownership"]/parent::span/following-sibling::div/descendant::a',*/'#acc14',
            employees: /*'//span[text()="Employees"]/parent::label/following-sibling::input',*/'#acc15',
            sicCode: /*'//span[text()="SIC Code"]/parent::label/following-sibling::input'*/'#acc16'
        };
    }

    /**
     * Method to fill all account information.
     */
    fillAccountWithAllFieldsAndSave(accountData) {
        commonActions.setInputTextField(this.accountInformation.name, accountData.name);
        //       commonActions.selectOnAutoCompleterTextField(this.accountInformation.parent, accountData.parent);
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
