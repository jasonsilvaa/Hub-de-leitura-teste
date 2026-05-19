class CadastroPage {

    campoNome() {
        return cy.get('#name');
    }
    campoEmail() {
        return cy.get('#email');
    }
    campoPhone() {
        return cy.get('#phone');
    }
    campoPassword() {
        return cy.get('#password');
    }
    campoConfirmPassword() {
        return cy.get('#confirm-password');
    }
    campoTermsAgreement() {
        return cy.get('#terms-agreement');
    }
    campoRegisterBtn() {
        return cy.get('#register-btn');
    }

    visitarPaginaCadastro() {
        cy.visit('/register.html');
    }

    preencherFormularioCadastro(name, email, phone, password) {
        this.campoNome().clear().type(name);
        this.campoEmail().clear().type(email);
        this.campoPhone().clear().type(phone);
        this.campoPassword().clear().type(password);
        this.campoConfirmPassword().clear().type(password);
        this.campoTermsAgreement().check();
        this.campoRegisterBtn().click();
    }

}
export default new CadastroPage();