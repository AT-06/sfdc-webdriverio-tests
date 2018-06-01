'use strict';
let commonActions = require('../utils/CommonActions.js');

/**
 * Page Object to login on SalesForce.
 */
class LoginPage {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        this.loginUserName = '#username';
        this.loginPassword = '#password';
        this.loginSubmit = '#Login';
    }

    /**
     * Method to set the username Input Field.
     * @param userName Value Provided.
     */
    setUsername(userName) {
        commonActions.setInputTextField(this.loginUserName, userName);

    }

    /**
     * Method to set the password Input Field.
     * @param password Value Provided.
     */
    setPassword(password) {
        commonActions.setInputTextField(this.loginPassword, password);

    }

    /**
     * Method to click on login button.
     */
    submit() {
        commonActions.clickWebElement(this.loginSubmit);

    }

    openLoginPage() {
        browser.url('https://login.salesforce.com');
    }

    /**
     * Method to login on SalesForce.
     * @param userName Value Provided.
     * @param password Value Provided.
     */
    login(userName, password) {
        this.openLoginPage();
        this.setUsername(userName);
        this.setPassword(password);
        this.submit();
    }

}

module.exports = new LoginPage();
