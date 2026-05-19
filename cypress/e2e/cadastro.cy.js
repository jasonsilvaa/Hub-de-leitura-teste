/// <reference types="cypress" />
import cadastroPage from '../support/pages/cadastro-page';
import { fa, faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {
    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro();
    });
    it('Deve fazer cadastro com sucesso', () => {
        let email = `testes${Date.now()}@teste.com.br`;
        cy.get('#name').type('Jason Silva');
        cy.get('#email').type('testes@teste.com.br');
        cy.get('#phone').type('11999999999');
        cy.get('#password').type('123456');
        cy.get('#confirm-password').type('123456');
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();
        cy.url().should('include', '/dashboard.html');
    });
    it('Deve fazer cadastro com sucesso com Faker', () => {
        let email = faker.internet.email();
        let name = faker.person.fullName();
        cy.get('#name').type(name);
        cy.get('#email').type(email);
        cy.get('#phone').type(faker.phone.number('11999999999'));
        cy.get('#password').type('123456');
        cy.get('#confirm-password').type('123456');
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();
        cy.url().should('include', '/dashboard.html');
        cy.get('#user-name').should('contain', name);
    });
    it.only('Deve fazer cadastro com Page Object', () => {
        let email = `testes${Date.now()}@teste.com.br`;
        cadastroPage.preencherFormularioCadastro('Jason Silva', 'jason.silva@teste.com.br', '11999999999', '123456');
        cy.url().should('include', '/dashboard.html');
    });
});