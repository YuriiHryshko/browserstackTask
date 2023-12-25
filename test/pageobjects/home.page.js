class HomePage {

    get wdioIcon() { return $('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]'); }
    get title() { return $('//android.widget.TextView[@text="WEBDRIVER"]'); }

    async getTitleText() {
        return this.title.getText();
    }

}

module.exports = new HomePage();