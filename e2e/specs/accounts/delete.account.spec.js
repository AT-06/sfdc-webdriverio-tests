'use strict';

const login = require('../../pages/common/login.po');
const topSideBar = require(`../../pages/common/topsidebar.${theme}.po`);
const content = require(`../../pages/common/content.${theme}.po`);
const form = require(`../../pages/accounts/accountForm.${theme}.po`);

describe('Acceptance Test to Delete an Account', () => {

    let accountRequiredField = {
        name: 'Account Delete'
    };

    beforeEach(() => {
        login.login(loginApplication.username, loginApplication.password);
        topSideBar.goToSection('Accounts');
        content.clickOnNewButton();
        form.fillAccountFields(accountRequiredField);
        expect(content.isNameOnContent(accountRequiredField.name), 'Account Name is not equal on Content Page').to.be.true;
    });

    it('Should allow to delete an account', () => {
        topSideBar.goToSection('Accounts');
        content.selectElementAndDeleteThis(accountRequiredField.name);
        topSideBar.goToSection('Accounts');
        expect(content.existOnList(accountRequiredField.name), 'Account is present on list').to.be.false;
    });

});
