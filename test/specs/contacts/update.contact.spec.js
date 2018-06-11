'use strict';
let config = require('../../../config.json');
let loginPage = require('../../pages/login.page');
let topSideBar = require('../../pages/topsidebar.page');
let content = require('../../pages/content.page');
let form = require(`../../pages/contacts/contactsForm.${theme}.page`);
//let expect = require('chai').expect;
describe('Acceptance Test to Modify a Contact', function () {

    let contactModifiedData = {
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

    let contactToModify = 'Contact to update';

    beforeEach(function () {
        loginPage.login(config.username, config.password);
        topSideBar.goToSection('contacts');
        content.clickOnNewButton();
        form.fillContact(contactToModify);

    });

    afterEach(function () {
        topSideBar.goToSection('contacts');
        content.selectElementAndDeleteThis(contactModifiedData.lastName);

    });

    it('Should allow to update/modify new contact with required fields', function () {
        topSideBar.goToSection('contacts');
        content.selectElementAndEditThis(contactToModify);
        form.fillContactFields(contactModifiedData);
        expect(content.isNameOnContent(contactModifiedData.lastName), 'Contact Last Name is not equal on Content Page').to.be.true;
    });

});
