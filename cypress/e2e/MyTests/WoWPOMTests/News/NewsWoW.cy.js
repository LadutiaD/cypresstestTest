import NewsWow from "./NewsWoWTest";

describe('News-WoW', () => {
    it('News', () => {
        cy.viewport(1600, 900);
        cy.get('#blz-nav-wow-news').click();
        cy.get('[data-page="1"] > .List > :nth-child(4) > .NewsBlog > .Link').scrollIntoView({duration:4000});
        cy.get('[data-page="1"] > .List > :nth-child(4) > .NewsBlog > .Link').click();
        cy.get(':nth-child(34) > :nth-child(5) > :nth-child(2) > :nth-child(8) > :nth-child(1)').scrollIntoView({duration:4000});
    
    const nw = new NewsWow();
        nw.screenWidth();
        nw.clickOnNews();
        nw.scrollToDractir();
        nw.clickOnDractir();
        nw.scrollToText();
    
    })
})