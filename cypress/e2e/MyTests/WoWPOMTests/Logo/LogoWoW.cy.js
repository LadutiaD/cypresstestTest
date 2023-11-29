import LogoWoW from "./LogoWoWTest"

describe('Logo-Test', ()=>{
    it('Logo', ()=>{
        cy.get('body > blz-nav:nth-child(1) > blz-nav-dropdown:nth-child(5)').should('be.visible')
        .and('exist')

        const lw = new LogoWoW()
            lw.logoWoWExist()
    })
})