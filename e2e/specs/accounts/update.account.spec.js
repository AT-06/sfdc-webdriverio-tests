'use strict';

const environment = require('../../../environment.json');

const login = require('../../pages/common/login.po');
const topSideBar = require(`../../pages/common/topsidebar.${theme}.po`);
const content = require(`../../pages/common/content.${theme}.po`);
const form = require(`../../pages/accounts/accountForm.${theme}.po`);

describe('Acceptance Test to Modify an Account', () => {

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

    beforeEach(() => {
        login.login(environment.credentials.admin.username, environment.credentials.admin.password);
        topSideBar.goToSection('Accounts');
        content.clickOnNewButton();
        form.fillAccountFields(accountToModify);
        expect(content.isNameOnContent(accountToModify.name), 'Account Name is not equal on Content Page').to.be.true;
    });

    afterEach(() => {
        topSideBar.goToSection('Accounts');
        content.selectElementAndDeleteThis(accountModified.name);
    });

    it('Should allow to update/modify new account with required fields', () => {
        topSideBar.goToSection('Accounts');
        content.selectElementAndEditThis(accountToModify.name);
        form.fillAccountFields(accountModified);
        topSideBar.goToSection('Accounts');
        content.clickLastElementOnList(accountModified.name);
        expect(content.isNameOnContent(accountModified.name), 'Account Name is not equal on Content Page').to.be.true;
    });

});
