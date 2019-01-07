'use strict';

const environment = require('../../../environment.json');

const login = require('../../pages/common/login.po');
const topSideBar = require(`../../pages/common/topsidebar.${theme}.po`);
const content = require(`../../pages/common/content.${theme}.po`);
const form = require(`../../pages/contacts/contactsForm.${theme}.po`);

describe('Acceptance Test to create new Contact', () => {
    let contactData = {
        lastName: 'Grillo',
        title: 'Ing',
        department: 'Sales',
        leadSource: 'Web',
        phone: '11111',
        mobile: '77777',
        email: 'grillo@gmail.com'
    };

    beforeEach(() => {
        login.login(environment.credentials.admin.username, environment.credentials.admin.password);
    });

    afterEach(() => {
        topSideBar.goToSection('Contacts');
        content.selectElementAndDeleteThis(contactData.lastName);

    });

    it('#BVT Should allow to add new contact with all information', () => {
        topSideBar.goToSection('Contacts');
        content.clickOnNewButton();
        form.fillContactFields(contactData);
        expect(content.isNameOnContent(contactData.lastName), 'Contact Name is not equal on Content Page').to.be.true;
    });

});
