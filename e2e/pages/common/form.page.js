'use strict';
let commonActions = require('../../core/ui/commonActions.js');

/**
 * Page Object of Form.
 */
class Form {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.saveButton = '.pbButton > input[name="save"] , button.uiButton--brand.uiButton.forceActionButton>span';
    }

    /**
     * Method to click on save button.
     */
    clickOnSaveButton() {
        commonActions.clickWebElement(this.saveButton);
    }
}

module.exports = Form;
