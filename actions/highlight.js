var protractor = require('selenium-webdriver'),
    By = protractor.By,
    until = protractor.until;

var browser = new protractor.Builder()
    .forBrowser('chrome')
    .build();


browser.get('https://time.epam.com/').then(function () {
    return browser.findElement(By.className("date-value"));
}).then(function (element) {
    element.isDisplayed("Sep 30 - Oct 13");
    return highlightWithJS(elelement);
}).then(function () {
    return browser.findElement(By.css("ProjectName_project-name-component__3IEKs"));
}).then(function (element2) {
    element2.click();
});

function highlightWithJS(element) {
    var background;
    return element.getCssValue("backgroundColor").then(function (color) {
        background = color;
    }).then(function () {
        return browser.sleep(1000);
    })
}