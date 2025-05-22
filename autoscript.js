import webdriver from 'selenium-webdriver';

var capabilities = {
  browserName: 'firefox',
  project: process.env.BROWSERSTACK_PROJECT_NAME,
  'bstack:options': {
    os: 'OS X',
    os_version: 'Sonoma',
    name: 'BStack-[NodeJS] Sample Test',
    build: process.env.BROWSERSTACK_BUILD_NAME,
    // project: process.env.BROWSERSTACK_PROJECT_NAME
  }
};


var driver = new webdriver.Builder()
  // .usingServer(`https://${process.env.BROWSERSTACK_USERNAME}:${process.env.BROWSERSTACK_ACCESS_KEY}@hub.browserstack.com/wd/hub`)
  ..usingServer(`https://${process.env.BROWSERSTACK_USERNAME}:${process.env.BROWSERSTACK_ACCESS_KEY}@hub-preprod.bsstag.com/wd/hub`)
  .withCapabilities(capabilities)
  .build();

try {
    console.log('Started execution');
    await driver.get('https://www.google.com/');
    await driver.get('https://www.twitter.com');
    console.log('Finished execution');
    
    await new Promise(resolve => setTimeout(resolve, 60000));
  } catch (error) {
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed", "reason": "Some elements failed to load"}}'
    );
  } finally {
    await driver.quit();
  }
