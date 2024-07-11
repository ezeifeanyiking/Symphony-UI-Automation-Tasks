/// <reference types="cypress" />

class PageBase {
  click(element) {
    return element.click();
  }
}

module.exports = { PageBase };
