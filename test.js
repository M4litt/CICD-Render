const assert = require('assert');
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const options = new chrome.Options();
options.headless(); // sin interfaz gráfica

const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

  describe('Web App Tests', function () {
  this.timeout(30000); 

  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    await driver.quit();
  });

  it('Login successful', async function () {
    //Go to url
    await driver.get("http://localhost:1461/user");
    //Find element by id
    await driver.findElement(By.id("Username")).sendKeys("leto");
    //Find password by id
    await driver.findElement(By.id("Password")).sendKeys("lamamadejoakod");
    //Find button by id
    await driver.findElement(By.id("login")).click();
    await driver.sleep(1000);
    //Find element by id
    let text_got = await driver.findElement(By.id("welcome")).getText();
    assert.equal(text_got, "HOLA LETO!!111!1");
  });

  it('Form submition', async function () {
    await driver.get("http://localhost:1461/hub");
    await driver.findElement(By.name("name")).sendKeys("thiago");
    await driver.findElement(By.name("surname")).sendKeys("leto");
    await driver.findElement(By.name("age")).sendKeys("18");
    await driver.findElement(By.id("submit")).click();
    await driver.sleep(1000);
    //Check if result is empty
    let text_got = await driver.findElement(By.id("result")).getText();
    assert.equal(text_got.includes("thiago"), true);
  });
});