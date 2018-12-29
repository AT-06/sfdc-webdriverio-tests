'use strict';

const commonActions = require('../../core/ui/commonActions');
const Form = require('../common/form.po');

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
     */
    fillAccountWithAllFieldsAndSave(accountInformation, accountDataValue) {
        let fillAccountInformation = {
            'name': () => this.setAccountInput(accountInformation.name, accountDataValue.name),
            'number': () => this.setAccountInput(accountInformation.number, accountDataValue.number),
            'site': () => this.setAccountInput(accountInformation.site, accountDataValue.site),
            'type': () => this.setAccountOnComboBox(accountInformation.type, accountDataValue.type),
            'industry': () => this.setAccountOnComboBox(accountInformation.industry, accountDataValue.industry),
            'annualRevenue': () => this.setAccountInput(accountInformation.annualRevenue, accountDataValue.annualRevenue),
            'rating': () => this.setAccountOnComboBox(accountInformation.rating, accountDataValue.rating),
            'phone': () => this.setAccountInput(accountInformation.phone, accountDataValue.phone),
        };
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
        commonActions.setValue(elementCss, accountText);
    }

    /**
     * Method to set on combo box.
     * @param elementCss selector.
     * @param accountText value to set.
     */
    setAccountOnComboBox(elementCss, accountText) {
        commonActions.selectOnComboBox(elementCss, accountText);
    }
}

module.exports = AccountBaseForm;
