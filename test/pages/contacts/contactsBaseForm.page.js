let commonActions = require("../../utils/CommonActions");
let Form = require('../form.page');

class ContactsBaseForm extends Form {
    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        super();
    }

    /**
     * Method to fill the contact fields.
     * @param contactInformation json with contact fields selectors.
     * @param contactDataValue json with contact fields values.
     * @param elementOnComboBox selector.
     */
    fillContactWithAllFieldsAndSave(contactInformation, contactDataValue, elementOnComboBox) {
        let fillContactInformation = {
            'lastName': () => this.setContactInput(contactInformation.lastName, contactDataValue.lastName),
            'phone': () => this.setContactInput(contactInformation.phone, contactDataValue.phone),
            'mobile': () => this.setContactInput(contactInformation.mobile, contactDataValue.mobile),
            'title': () => this.setContactInput(contactInformation.title, contactDataValue.title),
            'department': () => this.setContactInput(contactInformation.department, contactDataValue.department),
            'leadSource': () => this.setContactOnComboBox(contactInformation.leadSource, contactDataValue.leadSource, elementOnComboBox),
            'email': () => this.setContactInput(contactInformation.email, contactDataValue.email),
        };
        Object.keys(contactDataValue).forEach(key => {
            fillContactInformation[key].call();
        });
        this.clickOnSaveButton();

    }

    /**
     * Method to set the contact input text.
     * @param elementCss selector.
     * @param contactText value to set.
     */
    setContactInput(elementCss, contactText) {
        commonActions.setInputTextField(elementCss, contactText);
    }

    /**
     * Method to set on combo box.
     * @param elementCss selector.
     * @param contactText value to set.
     * @param elementOnComboBox selector.
     */
    setContactOnComboBox(elementCss, contactText, elementOnComboBox) {
        commonActions.selectOnComboBox(elementCss, contactText, elementOnComboBox);
    }

}

module.exports = ContactsBaseForm;