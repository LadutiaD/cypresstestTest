class Logo
{
    logoExist()
    {
        cy.get('.header__logo-wrap').should('be.visible')     
        .and('exist')
    }
}

export default Logo