/// <reference types="cypress" />

const { PageBase } = require("./PageBase.cy");

class ProductsPage extends PageBase {
  sortingName() {
    return cy.get(".product_sort_container");
  }
  getFeaturesItems() {
    return cy.get(".features_items");
  }
  clickGetWomenTab() {
    this.click(this.getWomenTab());
  }
  clickGetTopsOption() {
    this.click(this.getTopsOption());
  }
}

module.exports = { ProductsPage };
