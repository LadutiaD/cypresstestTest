class URLWoW
{
    checkWoWSiteTransitionURL()
    {
        cy.visit('https://worldofwarcraft.blizzard.com/ru-ru/')
    }

    checkWoWSiteExistURL()
    {
        cy.url().should('include', 'worldofwarcraft.blizzard.com/ru-ru/')
        .and('eq', 'https://worldofwarcraft.blizzard.com/ru-ru/')
        .and('contain', 'worldofwarcraft')
    }
}

export default URLWoW