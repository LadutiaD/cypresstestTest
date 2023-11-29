class LoginWoW
{
    visitToLoginPage()
    {
        cy.visit('https://eu.account.battle.net/login/ru/');
    }

    checkHeaderOnLoginPage()
    {
        cy.get('#login-header').should('have.text', 'Авторизоваться');
    }

    inputEmail()
    {
        cy.get('#accountName').type('ladutiadima@mail.ru');
    }

    inputPassword()
    {
        cy.get('#password').type('195321abv');
    }

    clickOnSubmit()
    {
        cy.get('#submit').click();
    }

}

export default LoginWoW