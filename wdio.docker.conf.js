// Let's load the default configs:
const defaults = require('./wdio.conf.js').config;
let environment = require('./environment.json');

defaults.host = environment.docker.host;
defaults.port = 4444;
defaults.path = '/wd/hub';

// Send the merged config to wdio
exports.config = defaults;
