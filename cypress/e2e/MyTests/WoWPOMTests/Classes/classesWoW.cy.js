import ClassesWoW from "../Classes/classesWoWTest"

describe('races-Wow', () => {
    it('races', () => {
        cy.viewport(1900, 1200);
        cy.get('button#blz-nav-wow-game-info.is-dropdown[analytics-label="Информация об игре"]', {includeShadowDom:true}).trigger('mouseover').click({force:true});
        cy.get('a[href="/ru-ru/game/classes"]', {includeShadowDom:true}).click({force: true});
        cy.get('.margin-none.font-semp-xxxLarge-white').should('have.text', 'Классы');
        cy.wait(3000);
        cy.get("a[href='/ru-ru/game/classes/monk']").scrollIntoView({duration:2000});
        cy.get("a[href='/ru-ru/game/classes/monk']").click({force:true});
        cy.get('.font-semp-xxxLarge-white').should('have.text', 'Монах');
        cy.wait(3000);
        cy.get("a[href='/ru-ru/game/races/night-elf']").scrollIntoView({duration:2000});
        cy.get("a[href='/ru-ru/game/races/night-elf']").click();
        cy.get('.font-semp-xxxLarge-white.margin-none').should('have.text', 'Ночные эльфы');

        const cw = new ClassesWoW()
            cw.changePageSieze();
            cw.clickOnInfo();
            cw.clickOnClasses();
            cw.checkInClasses();
            cw.waitInClassesPage();
            cw.scrollToMonkClass();
            cw.clickOnMpnkClass();
            cw.checkInMonkClass();
            cw.waitInMonkClassPage();
            cw.scrollToNightElfRace();
            cw.clickOnNightElfRace();
            cw.checkInNightElfRace();

    });
});