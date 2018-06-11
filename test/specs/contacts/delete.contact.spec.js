'use strict';
let config = require('../../../config.json');
let loginPage = require('../../pages/login.page');
let topSideBar = require('../../pages/topsidebar.page');
let content = require('../../pages/content.page');
let form = require(`../../pages/contacts/contactsForm.${theme}.page`);

describe('Acceptance Test to Delete a Contact', function () {

    let contactToDelete = 'Contact to Delete';

    beforeEach(function () {
        loginPage.login(config.username, config.password);
        topSideBar.goToSection('contacts');
        content.clickOnNewButton();
        form.fillContact(contactToDelete);

    });

    it('Should allow to delete a contact', function () {
        topSideBar.goToSection('contacts');
        content.selectElementAndDeleteThis(contactToDelete);
        topSideBar.goToSection('contacts');
        expect(content.isNameOnList(contactToDelete), 'Contact is present on list').to.be.false;

    });

});