'use strict';
let loginPage = require('../../pages/common/login.page');
let topSideBar = require(`../../pages/common/topsidebar.${theme}.page`);
let content = require(`../../pages/common/content.${theme}.page`);
let form = require(`../../pages/accounts/accountForm.${theme}.page`);

describe('Acceptance Test to Modify an Account', function () {

    let accountModified = {
        name: 'Account Sample',
        number: 100,
        site: 2,
        type: 'Other',
        industry: 'Agriculture',
        annualRevenue: 200,
        rating: 'Hot',
    };

    let accountToModify = {
        name: 'Account Required'
    };

    beforeEach(function () {
        loginPage.login(loginApplication.username, loginApplication.password);
        topSideBar.goToSection('Accounts');
        content.clickOnNewButton();
        form.fillAccountFields(accountToModify);
        expect(content.isNameOnContent(accountToModify.name), 'Account Name is not equal on Content Page').to.be.true;
    });

    afterEach(function () {
        topSideBar.goToSection('Accounts');
        content.selectElementAndDeleteThis(accountModified.name);

    });

    it('Should allow to update/modify new account with required fields', function () {
        topSideBar.goToSection('Accounts');
        content.selectElementAndEditThis(accountToModify);
        form.fillAccountFields(accountModified);
        topSideBar.goToSection('Accounts');
        content.clickLastElementOnList(accountModified.name);
        expect(content.isNameOnContent(accountModified.name), 'Account Name is not equal on Content Page').to.be.true;
    });

});
