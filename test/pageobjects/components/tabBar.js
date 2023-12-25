class TabBar {

    get loginIcon() { return $('~Login'); }
    get formsIcon() { return $('~Forms'); }
    get swipeIcon() { return $('~Swipe'); }
    get homeIcon() { return $('~Home'); }

    async openLogin() {
        await this.loginIcon.click();
    }

    async openForms() {
        await this.formsIcon.click();
    }

    async openSwipe() {
        await this.swipeIcon.click();
    }

    async waitForTabBarShown() {
        return this.loginIcon.waitForDisplayed({
            timeout: 20000,
        });
    }

}

module.exports = new TabBar();