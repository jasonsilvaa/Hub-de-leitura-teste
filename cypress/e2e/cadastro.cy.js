
/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import cadastroPages from '../support/pages/cadastro-pages'
describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
        cy.visit('Register.html');
    });
    it('Deve preencher formulário de cadastro com sucesso', () => {
        let name = faker.person.fullName();
        let email = faker.internet.email();
        let password = faker.internet.password();

        cy.get('#name').type(name);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#confirm-password').type(password);
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();

        cy.url().should('include', 'dashboard.html');
        cy.get('#user-name').should('contain', name);
    });
    it('Deve fazer o cadastro com comando customizado', () => {
        cy.register(faker.person.fullName(), faker.internet.email(), faker.internet.password());
    });
});
describe('Funcionalidade: Cadastro - Validações com Page Object', () => {
    it('Deve preencher formulário de cadastro com sucesso usando Page Object', () => {
        cadastroPages.visitarPaginaCadastro();
           cadastroPages.realizarCadastro(faker.person.fullName(), faker.internet.email(), faker.internet.password());
    });
});

