// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
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
Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#login-btn').click();
    cy.url().should('include', 'dashboard.html');
});
Cypress.Commands.add('register', (name, email, password) => {
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#confirm-password').type(password);
    cy.get('#terms-agreement').check();
    cy.get('#register-btn').click();
    cy.url().should('include', 'dashboard.html');
    cy.get('#user-name').should('contain', name);
});
Cypress.Commands.add('contactForm', (name, email, subject, message) => {
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#subject').select(subject);
    cy.get('#message').type(message);
    cy.get('#btn-submit').click();
    cy.contains('Contato enviado com sucesso!').should('exist');
    cy.get('#alert-container').should('be.visible');
});