'use strict';

const environment = require('../../../environment.json');

const login = require('../../pages/common/login.po');
const topSideBar = require(`../../pages/common/topsidebar.${theme}.po`);
const content = require(`../../pages/common/content.${theme}.po`);
const form = require(`../../pages/accounts/accountForm.${theme}.po`);

describe('Acceptance Test to create new Account', () => {

    let accountFullData = {
        name: 'Account Sample',
        number: 100,
        site: 2,
        industry: 'Agriculture',
        annualRevenue: 200,
        rating: 'Hot',
        phone: 591591591
    };

    beforeEach(() => {
        login.login(environment.credentials.admin.username, environment.credentials.admin.password);
    });

    afterEach(() => {
        topSideBar.goToSection('Accounts');
        content.selectElementAndDeleteThis(accountFullData.name);

    });

    it('#BVT Should allow to add new account with all information', () => {
        topSideBar.goToSection('Accounts');
        content.clickOnNewButton();
        form.fillAccountFields(accountFullData);
        expect(content.isNameOnContent(accountFullData.name), 'Account Name is not equal on Content Page').to.be.true;
    });

});
