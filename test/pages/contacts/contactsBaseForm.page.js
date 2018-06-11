let commonActions = require("../../utils/CommonActions");
let Form = require('../form.page');

class ContactsBaseForm extends Form {
    constructor() {
        super();
    }

    fillContactWithAllFieldsAndSave(contactInformation, contactData, elementOnComboBox) {
        commonActions.setInputTextField(contactInformation.lastName, contactData.lastName);
        commonActions.setInputTextField(contactInformation.title, contactData.title);
        commonActions.setInputTextField(contactInformation.department, contactData.department);
        commonActions.setInputTextField(contactInformation.birthdate, contactData.birthdate);
        commonActions.selectOnComboBox(contactInformation.leadSource, contactData.leadSource, elementOnComboBox);
        commonActions.setInputTextField(contactInformation.phone, contactData.phone);
        commonActions.setInputTextField(contactInformation.mobile, contactData.mobile);
        commonActions.setInputTextField(contactInformation.fax, contactData.fax);
        commonActions.setInputTextField(contactInformation.email, contactData.email);
        commonActions.setInputTextField(contactInformation.assistant, contactData.assistant);
        commonActions.setInputTextField(contactInformation.street, contactData.street);
        commonActions.setInputTextField(contactInformation.city, contactData.city);
        commonActions.setInputTextField(contactInformation.country, contactData.country);
        commonActions.setInputTextField(contactInformation.languages, contactData.languages);
        commonActions.setInputTextField(contactInformation.description, contactData.description);
        this.clickOnSaveButton();
    }

    fillRequiredField(contactInformation, contactData) {
        commonActions.setInputTextField(contactInformation.lastName, contactData);
        this.clickOnSaveButton();
    }
}

module.exports = ContactsBaseForm;