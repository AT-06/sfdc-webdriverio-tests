'use strict';

const commonActions = require('../../core/ui/commonActions');

/**
 * Page Object to login on SalesForce.
 */
class Login {

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
        commonActions.setValue(this.loginUserName, userName);
    }

    /**
     * Method to set the password Input Field.
     * @param password Value Provided.
     */
    setPassword(password) {
        commonActions.setValue(this.loginPassword, password);
    }

    /**
     * Method to click on login button.
     */
    clickLoginButton() {
        commonActions.click(this.loginSubmit);
    }

    openLoginPage() {
        browser.url('https://login.salesforce.com');
    }

    /**
     * Method to login on SalesForce.
     * @param userName Value Provided.
     * @param password Value Provided.
     */
    static login(userName, password) {
        let loginPage = new Login();
        loginPage.openLoginPage();
        loginPage.setUsername(userName);
        loginPage.setPassword(password);
        loginPage.clickLoginButton();
    }

}

module.exports = Login;
