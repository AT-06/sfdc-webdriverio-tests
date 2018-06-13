'use strict';
let ContactsBaseForm = require('./contactsBaseForm.page');

class ContactsClassicForm extends ContactsBaseForm {
    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        super();
        this.elementOnComboBox = '//option[@value="{}"]';
        this.contactInformation = {
            lastName: '//input[@id="name_lastcon2"]',
            title: '//input[@id="con5"]',
            department: '//input[@id="con6"]',
            birthdate: '//input[@id="con7"]',
            leadSource: '//select[@id="con9"]',
            phone: '//input[@id="con10"]',
            mobile: '//input[@id="con12"]',
            fax: '//input[@id="con11"]',
            email: '//input[@id="con15"]',
            assistant: '//input[@id="con16"]',
            street: '//input[@id="con19street"]',
            city: '//input[@id="con19city"]',
            country: '//input[@id="con19country"]',
            languages: '//label[text()="Languages"]/parent::td/following-sibling::td/child::input',
            description: '//input[@id="con20"]'
        };
    }

    /**
     * Method to fill the contact fields.
     * @param contactData the contact values.
     */
    fillContactFields(contactData) {
        this.fillContactWithAllFieldsAndSave(this.contactInformation, contactData, this.elementOnComboBox);
    }

}

module.exports = new ContactsClassicForm();