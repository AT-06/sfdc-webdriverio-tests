'use strict';

const login = require('../../pages/common/login.po');
const topSideBar = require(`../../pages/common/topsidebar.${theme}.po`);
const content = require(`../../pages/common/content.${theme}.po`);
const form = require(`../../pages/contacts/contactsForm.${theme}.po`);

describe('Acceptance Test to Modify a Contact', () => {

    let contactModifiedData = {
        lastName: 'Grillo',
        title: 'Ing',
        department: 'Sales',
        leadSource: 'Web',
        phone: '11111',
        mobile: '77777',
        email: 'grillo@gmail.com'
    };

    let contactWithRequiredField = {
        lastName: 'TheContact'
    };

    beforeEach(() => {
        login.login(loginApplication.username, loginApplication.password);
        topSideBar.goToSection('Contacts');
        content.clickOnNewButton();
        form.fillContactFields(contactWithRequiredField);
        expect(content.isNameOnContent(contactWithRequiredField.lastName), 'Contact Name is not equal on Content Page').to.be.true;
    });

    afterEach(() => {
        topSideBar.goToSection('Contacts');
        content.selectElementAndDeleteThis(contactModifiedData.lastName);

    });

    it('Should allow to update/modify new contact with required fields', () => {
        topSideBar.goToSection('Contacts');
        content.selectElementAndEditThis(contactWithRequiredField.lastName);
        form.fillContactFields(contactModifiedData);
        topSideBar.goToSection('Contacts');
        content.clickLastElementOnList(contactModifiedData.lastName);
        expect(content.isNameOnContent(contactModifiedData.lastName), 'Contact Name is not equal on Content Page').to.be.true;
    });

});
