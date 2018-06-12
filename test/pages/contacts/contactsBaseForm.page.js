let commonActions = require("../../utils/CommonActions");
let Form = require('../form.page');

class ContactsBaseForm extends Form {
    constructor() {
        super();
    }

    fillContactWithAllFieldsAndSave(contactInformation, contactDataValue, elementOnComboBox) {
        let fillContactInformation = {
            'lastName': () => this.setContactInput(contactInformation.lastName, contactDataValue.lastName),
            'phone': () => this.setContactInput(contactInformation.phone, contactDataValue.phone),
            'mobile': () => this.setContactInput(contactInformation.mobile, contactDataValue.mobile),
            'title': () => this.setContactInput(contactInformation.title, contactDataValue.title),
            'department': () => this.setContactInput(contactInformation.department, contactDataValue.department),
            'leadSource': () => this.setContactOnComboBox(contactInformation.leadSource, contactDataValue.leadSource, elementOnComboBox),
            'email': () => this.setContactInput(contactInformation.email, contactDataValue.email),
        }
        Object.keys(contactDataValue).forEach(key => {
            fillContactInformation[key].call();
        });
        this.clickOnSaveButton();

    }

    setContactInput(elementCss, contactText) {
        commonActions.setInputTextField(elementCss, contactText);
    }

    setContactOnComboBox(elementCss, contactText, elementOnComboBox) {
        commonActions.selectOnComboBox(elementCss, contactText, elementOnComboBox);
    }

}

module.exports = ContactsBaseForm;