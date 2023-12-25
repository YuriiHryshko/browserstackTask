class RegistrationPage {

    get signUpBtn() { return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]'); }
    get emailErrorMessage() { return $('//android.widget.TextView[@text="Please enter a valid email address"]'); }
    get passwordErrorMessage() { return $('//android.widget.TextView[@text="Please enter at least 8 characters"]'); }
    get repeatPasswordErrorMessage() { return $('//android.widget.TextView[@text="Please enter the same password"]'); }

    async clickSignUpBtn() {
        await this.signUpBtn.click();
    }

    async getEmailErrorText() {
        return this.emailErrorMessage.getText();
    }

    async getPasswordErrorText() {
        return this.passwordErrorMessage.getText();
    }

    async getRepeatPasswordErrorText() {
        return this.repeatPasswordErrorMessage.getText();
    }

}

module.exports = new RegistrationPage();