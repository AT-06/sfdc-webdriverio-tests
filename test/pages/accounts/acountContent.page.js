'use strict';

let commonActions = require("../../utils/CommonActions");

let Content = require('../content.page');

/**
 * Page Object of Account Content.
 */
class AccountContent extends Content {

    /**
     * Constructor initializing all WebElements.
     */
    constructor() {
        super();
        // Selector of Account Information.
        this.accountInformation = {
            name: '#acc2',
            parent: '#acc3',
            number: '#acc5',
            site: '#acc23',
            type: '#acc6',
            industry: '#acc7',
            annualRevenue: '#acc8',
            rating: '#acc9',
            phone: '#acc10',
            fax: '#acc11',
            website: '#acc12',
            tickerSymbol: '#acc13',
            ownerShip: '#acc14',
            employees: '#acc15',
            sicCode: '#acc16'
        };
    }

    /**
     * Method to click on login button.
     */
    fillAccountForm() {

        commonActions.setInputTextField(this.accountInformation.name,'test');
        commonActions.setInputTextField(this.accountInformation.parent,'test1');
        commonActions.setInputTextField(this.accountInformation.number,'test2');
        commonActions.setInputTextField(this.accountInformation.site,'test3');

    }
}

module.exports = new AccountContent();

