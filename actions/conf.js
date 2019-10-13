exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {'browserName': 'chrome'},
    directConnect: true,

    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000
    }
};