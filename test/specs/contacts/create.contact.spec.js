'use strict';

let config = require('../../../config.json');
let login = require('../../pages/login.page');
let topSideBar = require('../../pages/topsidebar.page');
let content = require('../../pages/content.page');
let form = require(`../../pages/contacts/contactsForm.${theme}.page`);

describe('Acceptance Test to create new Contact', function () {
    let contactData = {
        lastName: 'Grillo',
        title: 'Ing',
        department: 'Sales',
        birthdate: '5/4/2018 ',
        leadSource: 'Web',
        phone: '11111',
        mobile: '77777',
        fax: '99999',
        email: 'grillo@gmail.com',
        assistant: 'assistant',
        street: 'libertador',
        city: 'Cochabamba',
        country: 'Bolivia',
        languages: 'English',
        description: 'This is the test'
    };

    // Login application.
    beforeEach(function () {
        login.login(config.username, config.password);
    });

    it('Should allow to add a new contact ', function () {
        topSideBar.goToSection('contacts');
        content.clickOnNewButton();
        form.fillContact(contactData.lastName);
        expect(content.isNameOnContent(contactData.lastName), 'Contact Name is not equal on Content Page').to.be.true;
    });

    it('Should allow to add new contact with all information', function () {
        topSideBar.goToSection('contacts');
        content.clickOnNewButton();
        form.fillContactFields(contactData);
        expect(content.isNameOnContent(contactData.lastName), 'Contact Name is not equal on Content Page').to.be.true;

    });

});