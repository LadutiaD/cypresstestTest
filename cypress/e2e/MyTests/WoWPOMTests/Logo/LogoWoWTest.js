class LogoWoW 
{
    logoWoWExist()
    {
        cy.get('body > blz-nav:nth-child(1) > blz-nav-dropdown:nth-child(5)').should('be.visible')
        .and('exist')
    }
}

export default LogoWoW