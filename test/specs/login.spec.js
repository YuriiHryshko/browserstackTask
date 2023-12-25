const loginPage = require('../pageobjects/login.page');
const registrationPage = require('../pageobjects/registration.page');
const tabBar = require('../pageobjects/components/tabBar.js');

describe('Login Page testing,', () => {
    beforeEach(async() => {
        await driver.launchApp();
        await tabBar.waitForTabBarShown();
        await tabBar.openLogin();
    });

    it('Login with empty fields', async() => {
        await loginPage.clickLoginBtn();
        await expect(await loginPage.getEmailErrorText()).toEqual("Please enter a valid email address");
        await expect(await loginPage.getPasswordErrorText()).toEqual("Please enter at least 8 characters");
    });

    it('Registration with empty fields', async() => {
        await loginPage.clickSignUpFormShowBtn();
        await registrationPage.clickSignUpBtn();
        await expect(await registrationPage.getEmailErrorText()).toEqual("Please enter a valid email address");
        await expect(await registrationPage.getPasswordErrorText()).toEqual("Please enter at least 8 characters");
        await expect(await registrationPage.getRepeatPasswordErrorText()).toEqual("Please enter the same password");
    });

    afterEach(async function() {
        await driver.closeApp();
    });
});