class ForumsWoW
{
    fullScreenPage()
    {
        cy.viewport(1900, 1200);
    }

    clickOnCommunity()
    {
        cy.get('button#blz-nav-wow-community.is-dropdown[analytics-label="Сообщество"]', {includeShadowDom:true}).trigger('mouseover').click({force:true});
    }

    clickOnForums()
    {
        cy.get('a[href="https://us.forums.blizzard.com/en/wow/"]', {includeShadowDom:true}).click({force: true});
    }

    clickOnList()
    {
        cy.get('a.b-realm[href="/en/wow/c/dalaran/63"]').scrollIntoView({duration:4000}).click();
    }
}

export default ForumsWoW