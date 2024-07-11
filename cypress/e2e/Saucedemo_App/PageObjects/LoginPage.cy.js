/// <reference types="cypress" />

const { PageBase } = require("./PageBase.cy");

class LoginPage extends PageBase {
  userName() {
    return cy.get("#user-name");
  }
  password() {
    return cy.get("#password");
  }
  loginBtn() {
    return cy.get("#login-button");
  }
  clickLoginBtn() {
    this.click(this.loginBtn());
  }
}

module.exports = { LoginPage };
