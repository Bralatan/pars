const { Builder, By, Key, util } = require('selenium-webdriver');
async function pars() {
    let driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.facebook.com/pg/DonNU.PhysTech/photos/?tab=album&album_id=1460600064257765');

        driver.sleep(20000).then(async function() {
            for (let i = 1; i < 100; i++) {
                var Reference = await (await driver.findElement(By.selector('#js_51 > div > div:nth-child(1) > div:nth-child(2) > div._2eec'))).getText();
                console.log(Reference);
            }
            driver.quit();
        });
}
pars();
