class ClassesWoW
{
    changePageSieze()
    {
        cy.viewport(1900, 1200);
    }

    clickOnInfo()
    {
        cy.get('button#blz-nav-wow-game-info.is-dropdown[analytics-label="Информация об игре"]', {includeShadowDom:true}).trigger('mouseover').click({force:true});
    }

    clickOnClasses()
    {
        cy.get('a[href="/ru-ru/game/classes"]', {includeShadowDom:true}).click({force: true});
    }

    checkInClasses()
    {
        cy.get('.margin-none.font-semp-xxxLarge-white').should('have.text', 'Классы');
    }

    waitInClassesPage()
    {
        cy.wait(3000);
    }

    scrollToMonkClass()
    {
        cy.get("a[href='/ru-ru/game/classes/monk']").scrollIntoView({duration:2000});
    }

    clickOnMpnkClass()
    {
        cy.get("a[href='/ru-ru/game/classes/monk']").click({force:true});
    }

    checkInMonkClass()
    {
        cy.get('.font-semp-xxxLarge-white').should('have.text', 'Монах');
    }

    waitInMonkClassPage()
    {
        cy.wait(3000);
    }

    scrollToNightElfRace()
    {
        cy.get("a[href='/ru-ru/game/races/night-elf']").scrollIntoView({duration:2000});
    }

    clickOnNightElfRace()
    {
        cy.get("a[href='/ru-ru/game/races/night-elf']").click();
    }

    checkInNightElfRace()
    {
        cy.get('.font-semp-xxxLarge-white.margin-none').should('have.text', 'Ночные эльфы');
    }
}

export default ClassesWoW