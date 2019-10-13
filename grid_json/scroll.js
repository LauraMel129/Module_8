'use strict';

var webDriver = require('selenium-webdriver');
var driver = new webDriver.Builder()
    .usingServer('http://localhost:4444/wd/hub')
    .withCapabilities(webDriver.Capabilities.chrome())
    .build();

driver.get('https://www.time.epam.com/').then(function () {
    return driver.findElement(webDriver.By.className("app-logo"));
}).then(function (el) {
    // scroll into view
    return driver.executeScript("arguments[0].scrollIntoView();", el);
}).then(function () {
    // freeze for a while to demonstrate action result
    return driver.sleep(2000);
}).then(function () {
    return driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
});
