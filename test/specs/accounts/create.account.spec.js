'use strict';
let login = require('../../pages/login.page');
let topSideBar = require('../../pages/topsidebar.page');
let content = require('../../pages/content.page');
let form = require(`../../pages/accounts/accountForm.${theme}.page`);

describe('Acceptance Test to create new Account', function () {

    let accountFullData = {
        name: 'Account Sample',
        number: 100,
        site: 2,
        industry: 'Agriculture',
        annualRevenue: 200,
        rating: 'Hot',
        phone: 591591591
    };
    let accountRequiredField = {
        name: 'Account Required'
    };

    // Login application.
    beforeEach(function () {
        login.login(loginApplication.username, loginApplication.password);
    });

    it('Should allow to add new account with required fields', function () {
        topSideBar.goToSection('accounts');
        content.clickOnNewButton();
        form.fillAccountFields(accountRequiredField);
        expect(content.isNameOnContent(accountRequiredField.name), 'Account Name is not equal on Content Page').to.be.true;
    });

    it('Should allow to add new account with all information', function () {
        topSideBar.goToSection('accounts');
        content.clickOnNewButton();
        form.fillAccountFields(accountFullData);
        expect(content.isNameOnContent(accountFullData.name), 'Account Name is not equal on Content Page').to.be.true;

    });

});
