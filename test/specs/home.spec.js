const homePage = require('../pageobjects/home.page');
const tabBar = require('../pageobjects/components/tabBar.js');

describe('Home Page testing,', () => {
    beforeEach(async() => {
        await driver.launchApp();
        await tabBar.waitForTabBarShown();
    });

    it('Displaying the Main Page', async() => {
        await expect(await tabBar.homeIcon.isSelected()).toBe(true);
        await expect(await homePage.wdioIcon).toBeDisplayed();
        await expect(await homePage.getTitleText()).toContain("WEBDRIVER");
    });

    afterEach(async function() {
        await driver.closeApp();
    });
});