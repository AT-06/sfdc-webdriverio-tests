'use strict';
let ContactsBaseForm = require('./contactsBaseForm.page');

class ContactsLightForm extends ContactsBaseForm {
    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        super();
        this.contactInformation = {
            lastName: '//span[text()="Last Name"]/parent::label/following-sibling::input',
            title: '//span[text()="Title"]/parent::label/following-sibling::input',
            department: '//span[text()="Department"]/parent::label/following-sibling::input',
            birthdate: '//span[text()="Birthdate"]/parent::label/following-sibling::div/child::input',
            leadSource: '//span[text()="Lead Source"]/parent::span/following-sibling::div/descendant::a',
            phone: '//span[text()="Phone"]/parent::label/following-sibling::input',
            mobile: '//span[text()="Mobile"]/parent::label/following-sibling::input',
            fax: '//span[text()="Fax"]/parent::label/following-sibling::input',
            email: '//span[text()="Email"]/parent::label/following-sibling::input',
            assistant: '//span[text()="Assistant"]/parent::label/following-sibling::input',
            street: '//span[text()="Mailing Street"]/parent::label/following-sibling::textarea',
            city: '//span[text()="Mailing City"]/parent::label/following-sibling::input',
            country: '//span[text()="Mailing Country"]/parent::label/following-sibling::input',
            languages: '//span[text()="Languages"]/parent::label/following-sibling::input',
            description: '//span[text()="Description"]/parent::label/following-sibling::textarea'

        };

    }

    /**
     * Method to fill the contact fields.
     * @param contactData the contact values.
     */
    fillContactFields(contactData) {
        this.fillContactWithAllFieldsAndSave(this.contactInformation, contactData);
    }

}

module.exports = new ContactsLightForm();