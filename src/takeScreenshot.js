const webdriver = require('selenium-webdriver');
const { By } = webdriver;
const fs = require('fs');

(async () => {
  const driver = new webdriver
    .Builder()
    .forBrowser('chrome')
    .build();

  await driver.get('http://iolearn.com/');
  await driver.manage().window().maximize();
  // await driver.findElement(By.css('#lst-ib')).sendKeys('doctorD');
  // await driver.findElement(By.css('[name="btnK"]')).click();
  const data = await driver.takeScreenshot();
  await fs.writeFileSync('img.png', data, 'base64');
  await driver.quit();
})();