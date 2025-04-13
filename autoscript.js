// random commit #random 62
var webdriver = require('selenium-webdriver');

// Input capabilities
var capabilities = {
  browserName: 'firefox',
  os: 'OS X',
  os_version: 'Sonoma',
  'bstack:options' : {
    		 // ChromeOption to start chrome in incognito mode
         name: 'BStack-[NodeJS] Sample Test',
         build: process.env.BROWSERSTACK_BUILD_NAME,
        project: process.env.BROWSERSTACK_PROJECT_NAME,
         browserName: 'firefox',
         os: 'OS X',
         os_version: 'Sonoma',
    	}
  //'browserstack.user': process.env.BROWSERSTACK_USERNAME,
  //'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY
}

var driver = new webdriver.Builder()
  .usingServer('https://${process.env.BROWSERSTACK_USERNAME}:${process.env.BROWSERSTACK_ACCESS_KEY}@hub.browserstack.com/wd/hu')
  .withCapabilities(capabilities)
  .build();

driver.get('http://localhost:8099').then(function () {
  driver.getTitle().then(function (title) {
    console.log(title);
    driver.quit();
  });
});
