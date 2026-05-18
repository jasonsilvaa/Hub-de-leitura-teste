describe('Funcionalidade: contato', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });
  it('Deve preencher formulário de contato com sucesso', () => {
    
    cy.get('[name="name"]').type('Jason Silva');
    cy.get('[name="email"]').type('teste@teste.com');
    cy.get('[name="subject"]').select('Sugestões');
    cy.get('[name="message"]').type('Gostaria de sugerir uma nova funcionalidade para o site.');
    cy.get('#btn-submit').click();
    cy.contains('Contato enviado com sucesso').should('be.visible');
  });
  it('Deve mostrar mensagem de erro ao enviar formulário sem nome', () => {
    
    cy.get('#btn-submit').click();
    cy.contains('Por favor, preencha o campo Nome').should('be.visible');
  });
  it('Deve mostrar mensagem de erro ao enviar formulário sem E-mail', () => {
   
    cy.get('[name="name"]').type('Jason Silva');
    cy.get('#btn-submit').click();
    cy.contains('Por favor, preencha o campo E-mail').should('be.visible');
  });
  it('Deve mostrar mensagem de erro ao enviar formulário sem Assunto', () => {
   
    cy.get('[name="name"]').type('Jason Silva');
    cy.get('[name="email"]').type('teste@teste.com');
    cy.get('#btn-submit').click();
    cy.contains('Por favor, selecione o Assunto').should('be.visible');
  });
  it('Deve mostrar mensagem de erro ao enviar formulário sem Mensagem', () => {
    
    cy.get('[name="name"]').type('Jason Silva');
    cy.get('[name="email"]').type('teste@teste.com');
    cy.get('[name="subject"]').select('Sugestões');
    cy.get('#btn-submit').click();
    cy.contains('Por favor, escreva sua Mensagem').should('be.visible');
  });
});