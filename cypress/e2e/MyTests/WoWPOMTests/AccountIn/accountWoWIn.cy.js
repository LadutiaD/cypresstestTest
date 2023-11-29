import accountIN from "./accountWoWInTest";

describe('account-WoW-In', () => {
    it('acoount-In', () => {
        cy.get('button#account.is-dropdown[analytics-label="Учетная запись"]', {includeShadowDom:true}).trigger('mouseover').click();
        cy.get('a.nav-link#blz-nav-battlenet[href="/ru-ru/login"]', {includeShadowDom:true}).trigger('mouseover').invoke('removeAttr', 'target').click()
        .end();
                
    const an = new accountIN()
        an.chooseAccountButton();
        an.clickOnAccountIn();
    });
})