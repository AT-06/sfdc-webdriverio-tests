'use strict';
let loginPage = require('../../pages/login.page');
let topSideBar = require('../../pages/topsidebar.page');
let content = require('../../pages/content.page');
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
        topSideBar.goToSection('accounts');
        content.clickOnNewButton();
        form.fillAccountFields(accountToModify);
        expect(content.isNameOnContent(accountToModify.name), 'Account Name is not equal on Content Page').to.be.true;
    });

    it('Should allow to update/modify new account with required fields', function () {
        topSideBar.goToSection('accounts');
        content.selectElementAndEditThis(accountToModify);
        form.fillAccountFields(accountModified);
        topSideBar.goToSection('accounts');
        content.clickLastElementOnList(accountModified.name);
        expect(content.isNameOnContent(accountModified.name), 'Account Name is not equal on Content Page').to.be.true;
    });

});
