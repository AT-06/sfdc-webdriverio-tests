'use strict';
let config = require('../../../config.json');
let loginPage = require('../../pages/login.page');
let topSideBar = require('../../pages/topsidebar.page');
let content = require('../../pages/accounts/acountContent.page');
let form = require('../../pages/accounts/accountForm.page');
let expect = require('chai').expect;
describe('Acceptance Test to create new Account', function () {
    this.retries(3);

    let accountFullData = {
        name: 'Account Sample',
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

    // Login application.
    beforeEach(function () {
        loginPage.login(config.username, config.password);
    });

    // Delete an accounts created.
    afterEach(function () {
        topSideBar.goToSection('accounts');
        content.selectElementAndDeleteThis(accountFullData.name);
        //  expect(content.isNameOnList(accountFullData.name), 'Account is present on list').to.be.false;

    });

    it('Should allow to add new account with required fields', function () {
        topSideBar.goToSection('accounts');
        content.clickOnNewButton();
        form.fillAccountWithRequiredFieldsAndSave(accountFullData.name);
        expect(content.isNameOnContent(accountFullData.name), 'Account Name is not equal on Content Page').to.be.true;
        topSideBar.goToSection('accounts');
        expect(content.isNameOnList(accountFullData.name), 'Account is present on list').to.be.true;
    });

    it('Should allow to add new account with all information', function () {
        topSideBar.goToSection('accounts');
        content.clickOnNewButton();
        form.fillAccountWithAllFieldsAndSave(accountFullData);
        expect(content.isNameOnContent(accountFullData.name), 'Account Name is not equal on Content Page').to.be.true;
        topSideBar.goToSection('accounts');
        expect(content.isNameOnList(accountFullData.name), 'Account is present on list').to.be.true;
    });

});
