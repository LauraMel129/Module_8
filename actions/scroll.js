'use strict';

var protractor = require('selenium-webdriver');
var browser = new protractor.Builder().withCapabilities(
    protractor.Capabilities.chrome()
).build();

browser.get('https://www.time.epam.com/').then(function () {
    return browser.findElement(protractor.By.className("app-logo"));
}).then(function (element) {
    return browser.executeScript("arguments[0].scrollIntoView();", element);
}).then(function () {
    return browser.sleep(2000);
}).then(function () {
    return browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
}).then(function () {
    return browser.sleep(2000);
}).then(function () {
    // scroll by coordinates
    return browser.executeScript('window.scrollTo(600, 200)');
}).then(function () {
    return browser.sleep(2000);
}).then(function () {
    browser.quit();
});