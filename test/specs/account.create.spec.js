'use strict';
let config = require('../../config.json');
let loginPage = require('../pages/login.page');
let topSideBar = require('../pages/topsidebar.page');
let content = require('../pages/accounts/acountContent.page');
let expect = require('chai').expect;
describe('Acceptance Test to create new Account', function () {

    // Login application.
    beforeEach(function () {
        loginPage.login(config.username, config.password);
    });

    it('Should allow to add new account', function () {
        topSideBar.clickOnPlusButton();
        content.clickOnSectionButton('accounts');
        browser.pause(100000);
        content.clickOnNewButton();
        content.fillAccountForm();
    });

});