const { de } = require("@faker-js/faker");

/// references types="cypress" />
describe('Funcionalidade: Catálogo de Livros', () => {
    beforeEach(() => {
        cy.visit('/catalog.html');
    });
    it.skip('Deve clicar no botão adicionar ao catálogo', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click();
        cy.get('#cart-count').should('contain', '1');
    });
    it('Deve clicar no primeiro botão Adicionar à cesta', () => {
         cy.get('.btn-primary').click({multiple: true});
    });
    it('Deve clicar no primeiro botão Adicionar à cesta', () => {
        cy.get('.btn-primary').first().click();
    });
    it('Deve clicar no último botão Adicionar à cesta', () => {
        cy.get('.btn-primary').last().click();
    });
   
    it('Deve clicar no terceiro botão à cesta', () => {
         cy.get('.btn-primary').eq(3).click();
    });
    it('Deve clicar no 4º botão e adicionar à cesta', () => {
         cy.get('.btn-primary').eq(4).click();
         cy.get('#global-alert-container').should('contain','A Metamorfose');
    });
    it('Deve clicar no nome do livro e direcionar para a tela do livro', () => {
        cy.contains('Dom Casmurro').click();
        cy.url().should('include', '/book-details.html');
        cy.get('#add-to-cart-btn').should('be.visible');
        cy.get('#add-to-cart-btn').click();
        cy.contains('Livro adicionado à cesta com sucesso!').should('be.visible');
    });
});