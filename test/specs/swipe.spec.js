const swipePage = require('../pageobjects/swipe.page');
const tabBar = require('../pageobjects/components/tabBar.js');

describe('Swipe Page testing,', () => {
    beforeEach(async() => {
        await driver.launchApp();
        await tabBar.waitForTabBarShown();
        await tabBar.openSwipe();
    });

    it('Swiping the carousel from left to right', async() => {
        await swipePage.waitForSliderShown();
        await expect(await swipePage.getCurrentItemText()).toContain('FULLY OPEN SOURCE');
        await swipePage.sliderSwipeLeft();
        await expect(await swipePage.getCurrentItemText()).toContain('GREAT COMMUNITY');
        await swipePage.sliderSwipeLeft();
        await expect(await swipePage.getCurrentItemText()).toContain('JS.FOUNDATION');
        await swipePage.sliderSwipeLeft();
        await expect(await swipePage.getCurrentItemText()).toContain('SUPPORT VIDEOS');
        await swipePage.sliderSwipeLeft();
        await expect(await swipePage.getCurrentItemText()).toContain('EXTENDABLE');
        await swipePage.sliderSwipeLeft();
        await expect(await swipePage.getCurrentItemText()).toContain('COMPATIBLE');
    });

    it('Vertical swipe to bottom text', async() => {
        await swipePage.waitForSliderShown();
        await swipePage.swipeDownToBottom();
        await expect(await swipePage.bottomText).toBeDisplayed();
    });

    afterEach(async function() {
        await driver.closeApp();
    });
});