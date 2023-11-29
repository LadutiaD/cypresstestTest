import LoginWoW from "./LoginWoWTest"
const ln = new LoginWoW()
describe('Login-Test', () => {

    it('Login', () => {
            cy.origin('https://eu.account.battle.net/login/ru/', () => { })
            cy.visit('https://worldofwarcraft.blizzard.com/ru-ru/')
            cy.get('#login-header').should('have.text', 'Авторизоваться');
            cy.get('#accountName').type('ladutiadima@mail.ru');
            cy.get('#password').type('195321abv');
            cy.get('#submit').click();
       

        /*cy.origin('https://eu.account.battle.net/login/ru/', () => {
            ln.visitToLoginPage();
            ln.checkHeaderOnLoginPage();
            ln.inputEmail();
            ln.inputPassword();
            ln.clickOnSubmit();
        })*/
        

    })
})