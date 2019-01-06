// Let's load the default configs:
let defaults = require('./wdio.conf.js').config;
let environment = require('./environment.json');

//
// =================
// Service Providers
// =================
// WebdriverIO supports Sauce Labs, Browserstack, and Testing Bot (other cloud providers
// should work too though). These services define specific user and key (or access key)
// values you need to put in here in order to connect to these services.
//
defaults.user = environment.testingbot.user;
defaults.key = environment.testingbot.key;

defaults.services = ['testingbot'];

// https://testingbot.com/support/other/test-options
// https://testingbot.com/support/getting-started/browsers.html
defaults.capabilities = [{
    browserName: environment.testingbot.browserName,
    platform: environment.testingbot.platform,
    version: environment.testingbot.version
}];

exports.config = defaults;
