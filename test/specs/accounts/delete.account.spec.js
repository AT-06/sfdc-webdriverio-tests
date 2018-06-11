'use strict';
let config = require('../../../config.json');
let loginPage = require('../../pages/login.page');
let topSideBar = require('../../pages/topsidebar.page');
let content = require('../../pages/content.page');
let form = require(`../../pages/accounts/accountForm.${theme}.page`);
//let expect = require('chai').expect;
describe('Acceptance Test to Delete an Account', function () {

    let accountToDelete = 'Account to Delete';

    beforeEach(function () {
        loginPage.login(config.username, config.password);
        topSideBar.goToSection('accounts');
        content.clickOnNewButton();
        form.fillAccountWithRequiredField(accountToDelete);

    });

    it('Should allow to delete an account', function () {
        topSideBar.goToSection('accounts');
        content.selectElementAndDeleteThis(accountToDelete);
        topSideBar.goToSection('accounts');
        expect(content.isNameOnList(accountToDelete.name), 'Account is present on list').to.be.false;

    });

});
