'use strict';

var protractor = require('selenium-webdriver');
var browser = new protractor.Builder().withCapabilities(
    protractor.Capabilities.chrome()
).build();

// navigating to test url
driver.get('https://www.npmjs.com/').then(function () {
    return browser.findElement(protractor.By.className("uui-caption _14hb7 _1Tyuz _28Nyy"));
}).then(function (el) {
    return browser.executeScript("arguments[0].click()", el);
}).then(function () {
    return browser.sleep(2000);
}).then(function () {
    var selector = "WEEK";
    return browser.executeScript("document.querySelector('" + selector + "').click()");
}).then(function () {
    return browser.sleep(2000);
}).then(function () {
    browser.quit();
});
