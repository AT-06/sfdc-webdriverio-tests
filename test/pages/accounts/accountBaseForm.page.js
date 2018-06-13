'use strict';
let commonActions = require("../../utils/CommonActions");
let Form = require('../common/form.page');

class AccountBaseForm extends Form {
    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        super();
    }

    /**
     * Method to fill the account fields.
     * @param accountInformation json with account fields selectors.
     * @param accountDataValue json with account fields values.
     * @param elementOnComboBox selector.
     */
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

    /**
     * Method to set the account input text.
     * @param elementCss selector.
     * @param accountText value to set.
     */
    setAccountInput(elementCss, accountText) {
        commonActions.setInputTextField(elementCss, accountText);
    }

    /**
     * Method to set on combo box.
     * @param elementCss selector.
     * @param accountText value to set.
     * @param elementOnComboBox selector.
     */
    setAccountOnComboBox(elementCss, accountText, elementOnComboBox) {
        commonActions.selectOnComboBox(elementCss, accountText, elementOnComboBox);
    }
}

module.exports = AccountBaseForm;