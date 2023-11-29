class URL
{
    urlLink='https://av.by/';
    


    followTheLink(link)
    {
        cy.visit(this.urlLink)
    }

    checkTheLink()
    {
        cy.url().should('include','av.by')
        .and('eq','https://av.by/')
        .and('contain','av')
    }
}

export default URL