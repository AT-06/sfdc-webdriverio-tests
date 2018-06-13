'use strict';
let login = require('../../pages/common/login.page');
let topSideBar = require(`../../pages/common/topsidebar.${theme}.page`);
let content = require(`../../pages/common/content.${theme}.page`);
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

    beforeEach(function () {
        login.login(loginApplication.username, loginApplication.password);
    });

    afterEach(function () {
        topSideBar.goToSection('Contacts');
        content.selectElementAndDeleteThis(contactData.lastName);

    });

      it('Should allow to add new contact with all information', function () {
        topSideBar.goToSection('Contacts');
        content.clickOnNewButton();
        form.fillContactFields(contactData);
        expect(content.isNameOnContent(contactData.lastName), 'Contact Name is not equal on Content Page').to.be.true;

    });

});