class Login
{
    openLogin()
    {
        cy.get("a[rel='nofollow'] span[class='nav__link-text']").click();
    }

    loginTitleExist()
    {
        cy.get('.drawer__slide--active > .drawer__slide-body > .auth > .auth__title').should('have.text', 'Вход');
    }

    inputValidNumber(number)
    {
        cy.get('#authPhone').type(number);
    }

    inputValidPassword(password)
    {
        cy.get('#passwordPhone').type(password);
    }

    entranceInLogin()
    {
        cy.get('button[class="button button--action"]').click();
    }
}

export default Login