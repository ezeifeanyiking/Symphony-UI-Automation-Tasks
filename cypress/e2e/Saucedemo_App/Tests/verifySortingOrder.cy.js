/// <reference types="cypress" />
const { LoginPage } = require("../PageObjects/LoginPage.cy");
const { ProductsPage } = require("../PageObjects/ProductsPage.cy");

describe("Validate that items are sorted by Name (A to Z) and Name (Z to A)", () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();

  before(() => {
    cy.setViewportSize("Desktop");
    cy.visit("/");
    cy.fixture("validLoginInfo.json").then((data) => {
      loginPage.userName().type(data[0].username);
      loginPage.password().type(data[0].password);
    });
    loginPage.clickLoginBtn();
  });

  it("should validate that items are sorted by Name (A to Z) and Name (Z to A)", () => {
    productsPage
      .sortingName()
      .invoke("text")
      .then((text) => {
        cy.log(text);
        const indexOfFirstClosingBracket = text.indexOf(")");
        const sortingName = text.slice(0, indexOfFirstClosingBracket + 1);
        if (sortingName === "Name (A to Z)") {
          cy.log("Passed");
          verifySortingOrder("asc");
        } else {
          productsPage.sortingName().select("Name (A to Z)");
          verifySortingOrder("asc");
        }

        productsPage.sortingName().select("Name (Z to A)");
        verifySortingOrder("desc");
      });
  });

  function verifySortingOrder(order) {
    cy.get(".inventory_item_name").then(($items) => {
      const itemNames = $items
        .map((index, html) => Cypress.$(html).text())
        .get();
      const sortedNames =
        order === "asc"
          ? [...itemNames].sort()
          : [...itemNames].sort((a, b) => b.localeCompare(a));
      expect(itemNames).to.deep.equal(sortedNames);
    });
  }
});
