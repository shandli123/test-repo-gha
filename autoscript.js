const { Builder } = require('selenium-webdriver');

// const capabilities = {
//   browserName: 'firefox',
//   os: 'OS X',
//   os_version: 'Sonoma',
//   'bstack:options' : {
//     		 // ChromeOption to start chrome in incognito mode
//          name: 'BStack-[NodeJS] Sample Test',
//          build: process.env.BROWSERSTACK_BUILD_NAME,
//          browserName: 'firefox',
//          os: 'OS X',
//          os_version: 'Sonoma',
//     	}
// };
var capabilities = {
  'browserName': 'chrome',
  'os': 'os x',
  'build': process.env.BROWSERSTACK_BUILD_NAME,
  'project': process.env.BROWSERSTACK_PROJECT_NAME,
  'os_version': 'high sierra',
  'browserstack.user': process.env.BROWSERSTACK_USERNAME,
  'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY
}

var driver = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(capabilities)
  .build();

driver.get('http://localhost:8099').then(function () {
  driver.getTitle().then(function (title) {
    console.log(title);
    driver.quit();
  });
});

// (async function runTest() {
//   let driver = await new Builder()
//     .usingServer(`https://${process.env.BROWSERSTACK_USERNAME}:${process.env.BROWSERSTACK_ACCESS_KEY}@hub.browserstack.com/wd/hub`)
//     .withCapabilities(capabilities)
//     .build();

//   try {
//     console.log('Started execution');
//     await driver.get('https://www.google.com/');
//     await driver.get('https://www.twitter.com');
//     console.log('Finished execution');
    
//     await new Promise(resolve => setTimeout(resolve, 60000));
//   } catch (error) {
//     await driver.executeScript(
//       'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed", "reason": "Some elements failed to load"}}'
//     );
//   } finally {
//     await driver.quit();
//   }
// })();
