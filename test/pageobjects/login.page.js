class LoginPage {

    get loginBtn() { return $('~button-LOGIN'); }
    get signUpFormShowBtn() { return $('//android.widget.TextView[@text="Sign up"]'); }
    get emailErrorMessage() { return $('//android.widget.TextView[@text="Please enter a valid email address"]'); }
    get passwordErrorMessage() { return $('//android.widget.TextView[@text="Please enter at least 8 characters"]'); }

    async clickLoginBtn() {
        await this.loginBtn.click();
    }

    async clickSignUpFormShowBtn() {
        await this.signUpFormShowBtn.click();
    }

    async getEmailErrorText() {
        return this.emailErrorMessage.getText();
    }

    async getPasswordErrorText() {
        return this.passwordErrorMessage.getText();
    }

}

module.exports = new LoginPage();