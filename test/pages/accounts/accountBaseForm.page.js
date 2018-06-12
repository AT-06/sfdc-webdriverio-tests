'use strict';
let commonActions = require("../../utils/CommonActions");
let Form = require('../form.page');

class AccountBaseForm extends Form {
    constructor() {
        super();
    }

    fillAccountWithAllFieldsAndSave(accountInformation, accountDataValue, elementOnComboBox) {
        let fillAccountInformation = {
            'name': () => this.setAccountInput(accountInformation.name, accountDataValue.name),
            'number': () => this.setAccountInput(accountInformation.number, accountDataValue.number),
            'site': () => this.setAccountInput(accountInformation.site, accountDataValue.site),
            'type': () => this.setAccountOnComboBox(accountInformation.type, accountDataValue.type, elementOnComboBox),
            'industry': () => this.setAccountOnComboBox(accountInformation.industry, accountDataValue.industry, elementOnComboBox),
            'annualRevenue': () => this.setAccountInput(accountInformation.annualRevenue, accountDataValue.annualRevenue),
            'rating': () => this.setAccountOnComboBox(accountInformation.rating, accountDataValue.rating, elementOnComboBox),
            'phone': () => this.setAccountInput(accountInformation.phone, accountDataValue.phone),
        }
        Object.keys(accountDataValue).forEach(key => {
            fillAccountInformation[key].call();
        });
        this.clickOnSaveButton();

    }

    setAccountInput(elementCss, accountText) {
        commonActions.setInputTextField(elementCss, accountText);
    }

    setAccountOnComboBox(elementCss, accountText, elementOnComboBox) {
        commonActions.selectOnComboBox(elementCss, accountText, elementOnComboBox);
    }
}

module.exports = AccountBaseForm;