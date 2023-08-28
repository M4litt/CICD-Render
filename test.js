const { Builder, By, Key } = require("selenium-webdriver");

const chai = require("chai");
const { describe, it, before, after } = require("node:test");

var assert = chai.assert;

describe("App Tests", function () {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async () => {
    await driver.quit();
  });
  it("Login successful", async () => {
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

  it("data submition", async () => {
    await driver.get("http://localhost:1461/hub");
    await driver.findElement(By.name("name")).sendKeys("thiago");

    await driver.findElement(By.name("surname")).sendKeys("leto");

    await driver.findElement(By.name("age")).sendKeys("18");

    await driver.findElement(By.id("submit")).click();
  });
});
