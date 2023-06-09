const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

Given(/^Click on login button$/, async () => {
    await LoginPage.loginbutton()
});

Then(/^I am able to verify title$/, async () => {
    await LoginPage.title()
});

Then(/^I am able to verify URL$/, async () => {
    await LoginPage.title()
});

Then(/^Exceptions should be thrown$/, async () => {
    await LoginPage.InvalidUsernamePassword()
});

Given(/^I sign out successfully$/, async () => {
    await LoginPage.signout()
});

When(/^I login with user (\w+) having role (.+)$/, async (username,role) => {
    await LoginPage.login(username, role)
});

When(/^I login with user (\w+) and password (.+)$/, async (username, invalidpassword) => {
    await LoginPage.InvalidPassword(username, invalidpassword)
});


Then(/^I am able to verify BC Logo$/, async () => {
	await LoginPage.verifyBCLogo()
});