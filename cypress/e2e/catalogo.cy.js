/// <reference types="cypress" />
describe('Funcionalidade: Catálogo de Livros', () => {
  beforeEach(() => {
    cy.visit('catalog.html');
  });
  it('Deve clicar no botão Adicionar à cesta',()=>{
    cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click();
    cy.get('#cart-count').should('contain', '1');
  })
  it('Deve Clicar em multiplos livros e verificar o contador',()=>{
    cy.get('.btn-primary').click({ multiple: true });
    cy.get('#cart-count').should('be.visible');
  });
  it('Deve clicar no primeiro livro e verificar o nome do livro adicionado',()=>{
    cy.get('.btn-primary').first().click();
    cy.get('#cart-count').should('contain', '1');
  });
  it('Deve clicar no último livro e verificar o nome do livro adicionado',()=>{
    cy.get('.btn-primary').last().click();
    cy.get('#cart-count').should('contain', '1');
  });
  it('Deve clicar no nome do livro e verificar se a descrição é exibida',()=>{
    cy.contains('Dom Casmurro').click();
    cy.url().should('include', 'book-details.html?id=1');
    cy.get('#add-to-cart-btn').click();
    cy.get('#alert-container').should('be.visible');
    cy.contains('Livro adicionado à cesta').should('exist');
  });
});