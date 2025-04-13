var webdriver = require('selenium-webdriver');

var capabilities = {
  browserName: 'firefox',
  'bstack:options': {
    os: 'OS X',
    os_version: 'Sonoma',
    name: 'BStack-[NodeJS] Sample Test',
    build: process.env.BROWSERSTACK_BUILD_NAME,
    project: process.env.BROWSERSTACK_PROJECT_NAME
  }
};

var driver = new webdriver.Builder()
  .usingServer(`https://${process.env.BROWSERSTACK_USERNAME}:${process.env.BROWSERSTACK_ACCESS_KEY}@hub.browserstack.com/wd/hub`)
  .withCapabilities(capabilities)
  .build();

driver.get('http://localhost:8099').then(function () {
  driver.getTitle().then(function (title) {
    console.log(title);
    driver.quit();
  });
});
