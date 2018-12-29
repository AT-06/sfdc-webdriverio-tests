'use strict';

const login = require('../../pages/common/login.po');
const topSideBar = require(`../../pages/common/topsidebar.${theme}.po`);
const content = require(`../../pages/common/content.${theme}.po`);
const form = require(`../../pages/contacts/contactsForm.${theme}.po`);

describe('Acceptance Test to Delete a Contact', () => {

    let contactToDelete = {
        lastName: 'Contact to Delete'
    };

    beforeEach(() => {
        login.login(loginApplication.username, loginApplication.password);
        topSideBar.goToSection('Contacts');
        content.clickOnNewButton();
        form.fillContactFields(contactToDelete);
        expect(content.isNameOnContent(contactToDelete.lastName), 'Contact Name is not equal on Content Page').to.be.true;
    });

    it('Should allow to delete a contact', () => {
        topSideBar.goToSection('Contacts');
        content.selectElementAndDeleteThis(contactToDelete.lastName);
        topSideBar.goToSection('Contacts');
        expect(content.existOnList(contactToDelete.lastName), 'Contact is present on list').to.be.false;
    });

});
