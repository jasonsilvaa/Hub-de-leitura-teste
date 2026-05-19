/// referencia do cypress
/// <reference types="cypress" />   
import user from '../fixtures/usuario.json';
describe('Funcionalidade: Login no Hub de Leitura', () => {
    beforeEach(() => {
        cy.visit('/login.html');
    });
    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type('usuario@teste.com');
        cy.get('#password').type('user123',{force: true});
        cy.get('#login-btn').click();
        cy.url().should('include', '/dashboard.html');
    });
    it('Deve mostrar mensagem de erro ao fazer login com comandos customizados', () => {
        cy.login('usuario@teste.com', 'user123');
    });
    it('Deve mostrar mensagem de erro ao fazer login com admin', () => {
        cy.loginAdmin('admin@biblioteca.com', 'admin123');
    });
    it('Deve fazer login com sucesso - Usando importação de massa de dados', () => {
        cy.login(user.email, user.senha);
    });
});