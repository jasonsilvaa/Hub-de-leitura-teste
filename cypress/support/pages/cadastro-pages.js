
class cadastroPages {
    // Método para visitar a página de cadastro
    visitarPaginaCadastro() {
        cy.visit('Register.html');
    }
    // Método para preencher o formulário de cadastro
    campoNome() { return cy.get('#name') };
    campoEmail() { return cy.get('#email') };
    campoPassword() { return cy.get('#password') };
    campoConfirmPassword() { return cy.get('#confirm-password') };
    checkboxTermos() { return cy.get('#terms-agreement') };
    botaoRegistrar() { return cy.get('#register-btn') };

    // Método para realizar o cadastro
    realizarCadastro(name, email, password) {
        this.campoNome().type(name);
        this.campoEmail().type(email);
        this.campoPassword().type(password);
        this.campoConfirmPassword().type(password);
        this.checkboxTermos().check();
        this.botaoRegistrar().click();
    }
};
export default new cadastroPages();