import ForumsWoW from "./ForumsWoWTest";

describe('Forums-WoW', () => {
    it('Forums', () => {
        cy.viewport(1900, 1200);
        cy.contains('Сообщество', {includeShadowDom:true}).click();
        cy.contains('Форумы', {includeShadowDom:true}).click({force:true});
        cy.get(':nth-child(86) > .b-realm > .realm-name').scrollIntoView({duration:4000}).click();

        const fw = new ForumsWoW();
            fw.fullScreenPage();
            fw.clickOnCommunity();
            fw.clickOnForums();
            fw.clickOnList();
    });
})