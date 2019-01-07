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
defaults.user = environment.browserstack.user;
defaults.key = environment.browserstack.key;

defaults.services = ['browserstack'];

// https://www.browserstack.com/automate/capabilities
defaults.capabilities = [{
    os: environment.browserstack.os,
    os_version: environment.browserstack.os_version,
    browser: environment.browserstack.browser,
    browser_version: environment.browserstack.browser_version
}];

exports.config = defaults;
