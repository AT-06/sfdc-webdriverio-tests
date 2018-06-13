'use strict';
let login = require('../../pages/login.page');
let topSideBar = require('../../pages/topsidebar.page');
let content = require(`../../pages/content.${theme}.page`);
let form = require(`../../pages/contacts/contactsForm.${theme}.page`);

describe('Acceptance Test to create new Contact', function () {
    let contactData = {
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

    // Login application.
    beforeEach(function () {
        login.login(loginApplication.username, loginApplication.password);
    });


    it('Should allow to add a new contact ', function () {
        topSideBar.goToSection('Contacts');
        content.clickOnNewButton();
        form.fillContactFields(contactWithRequiredField);
        expect(content.isNameOnContent(contactWithRequiredField.lastName), 'Contact Name is not equal on Content Page').to.be.true;
    });

    /** it('Should allow to add new contact with all information', function () {
        topSideBar.goToSection('Contacts');
        content.clickOnNewButton();
        form.fillContactFields(contactData);
        expect(content.isNameOnContent(contactData.lastName), 'Contact Name is not equal on Content Page').to.be.true;

    });**/

});