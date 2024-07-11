// ***********************************************
// Visit https://on.cypress.io/custom-commands to
// learn more about custom commands.
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("setViewportSize", (size) => {
  switch (size) {
    case "mobile":
      cy.viewport(375, 667); // iPhone 6/7/8
      break;
    case "tablet":
      cy.viewport(768, 1024); // iPad
      break;
    case "desktop":
      cy.viewport(1920, 1080); // Full HD
      break;
    default:
      cy.viewport(1280, 720); // Default size
  }
});
