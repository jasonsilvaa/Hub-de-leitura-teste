/// <reference types="cypress" />
import livro from '../fixtures/livro.json';
describe('Funcionalidade: Busca no Catálogo', () => {
    beforeEach(() => {
        cy.visit('/catalog.html');
    });
    it('Deve fazer a busca pelo livro 1984', () => {
        cy.get('#search-input').type(livro.titulo);
        cy.get('.card-title').should('contain', livro.titulo);
    });
});