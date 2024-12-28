const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

  ; (async function example() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build()
    try {
      await driver.navigate().to('https://www.google.com/ncr');
      await driver.navigate().back();
      await driver.navigate().forward();
      await driver.sleep(5000);
    } finally {
      await driver.quit()
    }
  })()