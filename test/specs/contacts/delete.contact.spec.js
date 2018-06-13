'use strict';
let loginPage = require('../../pages/login.page');
let topSideBar = require('../../pages/topsidebar.page');
let content = require(`../../pages/content.${theme}.page`);
let form = require(`../../pages/contacts/contactsForm.${theme}.page`);

describe('Acceptance Test to Delete a Contact', function () {

    let contactToDelete = {
        lastName: 'Contact to Delete'
    };

    beforeEach(function () {
        loginPage.login(loginApplication.username, loginApplication.password);
        topSideBar.goToSection('Contacts');
        content.clickOnNewButton();
        form.fillContactFields(contactToDelete);
        expect(content.isNameOnContent(contactToDelete.lastName), 'Contact Name is not equal on Content Page').to.be.true;
    });

    it('Should allow to delete a contact', function () {
        topSideBar.goToSection('Contacts');
        content.selectElementAndDeleteThis(contactToDelete.lastName);
        topSideBar.goToSection('Contacts');
        expect(content.isNameOnList(contactToDelete.lastName), 'Contact is present on list').to.be.false;

    });

});
