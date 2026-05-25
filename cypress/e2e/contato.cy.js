// reference types="cypress" />

describe('Funcionalidade: Contato', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });
  it('Deve preencher fumulário de contato com sucesso', () => {
    cy.get('#name').type('Jason Silva');
    cy.get('#email').type('teste@teste.com');
    cy.get('#subject').select('Suporte Técnico');
    cy.get('#message').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem.');
    cy.get('#btn-submit').click();
    cy.contains('Contato enviado com sucesso!').should('exist');
    cy.get('#alert-container').should('be.visible');
  });
  it('Deve exibir mensagem de erro ao não preencher o campo nome', () => {

    cy.get('#email').type('teste@teste.com');
    cy.get('#subject').select('Suporte Técnico');
    cy.get('#message').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem.');
    cy.get('#btn-submit').click();
    cy.contains('Por favor, preencha o campo Nome.').should('exist');
    cy.get('#alert-container').should('be.visible');
  });
  it('Deve exibir mensagem de erro ao não preencher o campo email', () => {
    cy.get('#name').type('Jason Silva');
    cy.get('#subject').select('Suporte Técnico');
    cy.get('#message').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem.');
    cy.get('#btn-submit').click();
    cy.contains('Por favor, preencha o campo E-mail.').should('exist');
    cy.get('#alert-container').should('be.visible');
  });
  it('Deve exibir mensagem de erro ao não preencher o campo select', () => {
    cy.get('#name').type('Jason Silva');
    cy.get('#email').type('teste@teste.com');
    cy.get('#message').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem.');
    cy.get('#btn-submit').click({ force: true });
    cy.contains('Por favor, selecione o Assunto.').should('exist');
    cy.get('#alert-container').should('be.visible');
  });
  it('Deve exibir mensagem de erro ao não preencher o campo mensagem', () => {
    cy.get('#name').type('Jason Silva');
    cy.get('#email').type('teste@teste.com');
    cy.get('#subject').select('Suporte Técnico');
    cy.get('#btn-submit').click();
    cy.contains('Por favor, escreva sua Mensagem.').should('exist');
    cy.get('#alert-container').should('be.visible');
  });
});