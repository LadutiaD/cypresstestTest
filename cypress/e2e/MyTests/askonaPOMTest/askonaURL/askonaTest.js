class askonaURL
{
    visitWebPage()
    {
        cy.visit('https://askona.by/');
    }

    checkWebPage()
    {
        cy.url().should('include', 'askona.by/')
        .and('eq', 'https://askona.by/')
        .and('contains', 'askona.by');
    }
}

export default askonaURL