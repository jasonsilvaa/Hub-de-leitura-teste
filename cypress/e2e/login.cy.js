/// <reference types="cypress" />
describe('Funcionalidade: login', () => {
    beforeEach(() => {
        cy.visit('Login.html');
    });
    it('Deve fazer login com sucesso', () => {
        cy.login('admin@biblioteca.com','admin123');
    });
});