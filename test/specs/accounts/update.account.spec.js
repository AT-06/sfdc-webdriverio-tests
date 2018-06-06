'use strict';
let config = require('../../../config.json');
let loginPage = require('../../pages/login.page');
let topSideBar = require('../../pages/topsidebar.page');
let content = require('../../pages/accounts/acountContent.page');
let form = require('../../pages/accounts/accountForm.page');
let expect = require('chai').expect;
describe('Acceptance Test to Modify an Account', function () {
    this.retries(3);

    let accountModifiedData = {
        name: 'Account Updated',
        number: 100,
        site: 2,
        parent: 'Edge Communications',
        type: 'Other',
        industry: 'Agriculture',
        annualRevenue: 200,
        rating: 'Hot',
        phone: 591591591,
        fax: 591591222,
        website: 'www.website.com',
        tickerSymbol: 'ACC',
        ownership: 'Private',
        employees: 10,
        sicCode: 200200200
    };

    let accountToModify = 'Account to update';

    beforeEach(function () {
        // Login on application.
        loginPage.login(config.username, config.password);
        // Create new account to modify.
        topSideBar.goToSection('accounts');
        content.clickOnNewButton();
        form.fillAccountWithRequiredFieldsAndSave(accountToModify);

    });

    // Delete an accounts created.
    afterEach(function () {
        topSideBar.goToSection('accounts');
        content.selectElementAndDeleteThis(accountModifiedData.name);
        //  expect(content.isNameOnList(accountModifiedData.name), 'Account is present on list').to.be.false;

    });

    it('Should allow to update/modify new account with required fields', function () {
        // Modify account
        topSideBar.goToSection('accounts');
        content.selectElementAndEditThis(accountToModify);
        form.fillAccountWithAllFieldsAndSave(accountModifiedData);
        expect(content.isNameOnContent(accountModifiedData.name), 'Account Name is not equal on Content Page').to.be.true;
    });

});
