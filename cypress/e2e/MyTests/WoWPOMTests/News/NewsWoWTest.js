class NewsWow
{
    screenWidth()
    {
        cy.viewport(1600, 900);
    }

    clickOnNews()
    {
        cy.get('#blz-nav-wow-news').click();
    }

    scrollToDractir()
    {
        cy.get('[data-page="1"] > .List > :nth-child(4) > .NewsBlog > .Link').scrollIntoView({duration:4000});
    }

    clickOnDractir()
    {
        cy.get('[data-page="1"] > .List > :nth-child(4) > .NewsBlog > .Link').click();
    }

    scrollToText()
    {
        cy.get(':nth-child(34) > :nth-child(5) > :nth-child(2) > :nth-child(8) > :nth-child(1)').scrollIntoView({duration:4000});
    }
}

export default NewsWow