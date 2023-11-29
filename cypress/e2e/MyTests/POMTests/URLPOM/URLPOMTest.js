class URL
{
    followTheLink(link)
    {
        cy.visit('https://av.by/')
    }

    checkTheLink()
    {
        cy.url().should('include','av.by')
        .and('eq','https://av.by/')
        .and('contain','av')
    }
}

export default URL