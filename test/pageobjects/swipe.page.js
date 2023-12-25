class SwipePage {

    get slider() { return $('//android.view.ViewGroup[@content-desc="Carousel"]'); }
    get currentSliderItem() { return $$('//android.view.ViewGroup[@content-desc="card"]//android.widget.TextView[@text]'); }
    get bottomText() { return $('//android.widget.TextView[@text="You found me!!!"]'); }

    async sliderSwipeLeft() {
        const slider = await this.slider;
        const size = await driver.getElementRect(slider.elementId);
        const startY = size.height / 2;
        const startX = size.width * 0.8;
        const endX = size.width * 0.2;

        await browser.touchAction([
            { action: 'press', element: slider, x: startX, y: startY },
            { action: 'wait', ms: 500 },
            { action: 'moveTo', element: slider, x: endX, y: startY, duration: 1000 },
            { action: 'release' }
        ]);
    }

    async waitForSliderShown() {
        return this.slider.waitForDisplayed({
            timeout: 5000,
        });
    }

    async getCurrentItemText() {
        const elements = await this.currentSliderItem;
        const texts = [];
        for (const element of elements) {
            texts.push(await element.getText());
        }

        return texts;
    }

    async swipeDownToBottom() {
        const windowSize = await browser.getWindowSize();
        const startY = windowSize.height * 0.9;
        const endY = windowSize.height * 0.2;
        await browser.touchAction([
            { action: 'press', x: 50, y: startY },
            { action: 'wait', ms: 500 },
            { action: 'moveTo', x: 50, y: endY },
            'release'
        ]);
    }

}

module.exports = new SwipePage();