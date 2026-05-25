/// <reference types="cypress" />
import livros from '../fixtures/livro.json';
describe('Funcionalidade: Catalogo Busca', () => {
    beforeEach(() => {
        cy.visit('catalog.html');
    });
    it('Deve buscar um livro existente e verificar os resultados', () => {
        livros.forEach((livro) => {
            cy.get('#search-input').clear().type(livro.titulo);
            //cy.get('#search-button').click();
            cy.get('.card').should('have.length', 1);
            cy.contains(livro.titulo).should('exist');
        });
    });
});

