'use strict';
let commonActions = require('../utils/CommonActions.js');

/**
 * Page Object of Form.
 */
class Form {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.saveButton = '.pbButton > input[name="save"]';
    }

    /**
     * Method to click on save button.
     */
    clickOnSaveButton() {
        commonActions.clickWebElement(this.saveButton);
    }
}

module.exports = Form;
