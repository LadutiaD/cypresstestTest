import URLWoW from './URLWoWTest'

describe('URL-WoW-Test', ()=>{
    it('URL', ()=>{
        cy.visit('https://worldofwarcraft.blizzard.com/ru-ru/')
        cy.url().should('include', 'worldofwarcraft.blizzard.com/ru-ru/')
        .and('eq', 'https://worldofwarcraft.blizzard.com/ru-ru/')
        .and('contain', 'worldofwarcraft')

        const uw = new URLWoW()
            uw.checkWoWSiteTransitionURL()
            uw.checkWoWSiteExistURL()

    })
})