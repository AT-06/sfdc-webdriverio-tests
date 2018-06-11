'use strict';
let commonActions = require("../../utils/CommonActions");
let Form = require('../form.page');

class AccountBaseForm extends Form {
    constructor() {
        super();
    }

    /**
     * Method to fill all account information.
     */
    fillAccountWithAllFieldsAndSave(elementCss, accountData, autoCompleter) {
        commonActions.setInputTextField(elementCss.name, accountData.name);
        commonActions.selectOnAutoCompleterTextField(elementCss.parent, accountData.parent, autoCompleter);

        commonActions.setInputTextField(elementCss.number, accountData.number);
        commonActions.setInputTextField(elementCss.site, accountData.site);
        commonActions.selectOnComboBox(elementCss.type, accountData.type, this.elementOnComboBox);
        commonActions.selectOnComboBox(elementCss.industry, accountData.industry, this.elementOnComboBox);
        commonActions.setInputTextField(elementCss.annualRevenue, accountData.annualRevenue);
        commonActions.selectOnComboBox(elementCss.rating, accountData.rating, this.elementOnComboBox);
        commonActions.setInputTextField(elementCss.phone, accountData.phone);
        commonActions.setInputTextField(elementCss.fax, accountData.fax);
        commonActions.setInputTextField(elementCss.website, accountData.website);
        commonActions.setInputTextField(elementCss.tickerSymbol, accountData.tickerSymbol);
        commonActions.selectOnComboBox(elementCss.ownership, accountData.ownership, this.elementOnComboBox);
        commonActions.setInputTextField(elementCss.employees, accountData.employees);
        commonActions.setInputTextField(elementCss.sicCode, accountData.sicCode);

        this.clickOnSaveButton();

    }

    /**
     * Method to fill only name of an account.
     */
    fillRequiredField(elementCss, accountName) {
        commonActions.setInputTextField(elementCss, accountName);
        this.clickOnSaveButton();
    }
}

module.exports = AccountBaseForm;