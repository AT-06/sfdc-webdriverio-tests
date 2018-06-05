'use strict';
let config = require('../../../config.json');
let loginPage = require('../../pages/login.page');
let topSideBar = require('../../pages/topsidebar.page');
let content = require('../../pages/accounts/acountContent.page');
let form = require('../../pages/accounts/accountForm.page');
let expect = require('chai').expect;
describe('Acceptance Test to Delete an Account', function () {
    this.retries(3);

    let accountToDelete = 'Account to Delete';

    beforeEach(function () {
        // Login on application.
        loginPage.login(config.username, config.password);
        // Create new account to delete.
        topSideBar.goToSection('accounts');
        content.clickOnNewButton();
        form.fillAccountWithRequiredFieldsAndSave(accountToDelete);


    });

    it('Should allow to delete an account', function () {
        // Delete account
        topSideBar.goToSection('accounts');
        content.selectElementAndDeleteThis(accountToDelete);
        topSideBar.goToSection('accounts');
        expect(content.isNameOnList(accountToDelete.name), 'Account is present on list').to.be.false;

    });

});
