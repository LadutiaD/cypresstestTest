class accountWoWIn
{
    chooseAccountButton()
    {
        cy.get('button#account.is-dropdown[analytics-label="Учетная запись"]', {includeShadowDom:true}).trigger('mouseover').click();
    }

    clickOnAccountIn()
    {
        cy.get('a.nav-link#blz-nav-battlenet[href="/ru-ru/login"]', {includeShadowDom:true}).trigger('mouseover').invoke('removeAttr', 'target').click()
        .end();
    }

}

export default accountWoWIn