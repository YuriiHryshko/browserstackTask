require('dotenv').config();

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    updateJob: false,
    specs: [
        './test/specs/**.spec.js'
    ],
    exclude: [],

    capabilities: [{
        project: "First Webdriverio Android Project",
        build: 'Webdriverio Android',
        name: 'first_test',
        device: 'Samsung Galaxy S20',
        os_version: "10.0",
        app: process.env.BROWSERSTACK_APP_ID,
        'browserstack.debug': true
    }],

    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec', ['allure', {
        outputDir: './allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};