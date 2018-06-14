'use strict';
let login = require('../../pages/common/login.page');
let topSideBar = require(`../../pages/common/topsidebar.${theme}.page`);
let content = require(`../../pages/common/content.${theme}.page`);
let form = require(`../../pages/contacts/contactsForm.${theme}.page`);

describe('Acceptance Test to Modify a Contact', function () {

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

    beforeEach(function () {
        login.login(loginApplication.username, loginApplication.password);
        topSideBar.goToSection('Contacts');
        content.clickOnNewButton();
        form.fillContactFields(contactWithRequiredField);
        expect(content.isNameOnContent(contactWithRequiredField.lastName), 'Contact Name is not equal on Content Page').to.be.true;
    });

    afterEach(function () {
        topSideBar.goToSection('Contacts');
        content.selectElementAndDeleteThis(contactModifiedData.lastName);

    });

    it('Should allow to update/modify new contact with required fields', function () {
        topSideBar.goToSection('Contacts');
        content.selectElementAndEditThis(contactWithRequiredField.lastName);
        form.fillContactFields(contactModifiedData);
        topSideBar.goToSection('Contacts');
        content.clickLastElementOnList(contactModifiedData.lastName);
        expect(content.isNameOnContent(contactModifiedData.lastName), 'Contact Name is not equal on Content Page').to.be.true;
    });

});
