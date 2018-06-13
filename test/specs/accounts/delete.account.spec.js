'use strict';
let login = require('../../pages/login.page');
let topSideBar = require('../../pages/topsidebar.page');
let content = require(`../../pages/content.${theme}.page`);
let form = require(`../../pages/accounts/accountForm.${theme}.page`);

describe('Acceptance Test to Delete an Account', function () {

    let accountRequiredField = {
        name: 'Account Delete'
    };

    beforeEach(function () {
        login.login(loginApplication.username, loginApplication.password);
        topSideBar.goToSection('Accounts');
        content.clickOnNewButton();
        form.fillAccountFields(accountRequiredField);
        expect(content.isNameOnContent(accountRequiredField.name), 'Account Name is not equal on Content Page').to.be.true;
    });

    it('Should allow to delete an account', function () {
        topSideBar.goToSection('Accounts');
        content.selectElementAndDeleteThis(accountRequiredField.name);
        topSideBar.goToSection('Accounts');
        expect(content.isNameOnList(accountRequiredField.name), 'Account is present on list').to.be.false;

    });

});
