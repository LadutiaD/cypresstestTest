import'cypress-iframe'



describe('Frames_test',()=>{
    
it.skip('frames test', ()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe')
       const iframe=cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
            

            iframe.clear().type('Welcome {cmd+a}')

            cy.get('[aria-label="Bold"]').click()
})


it.skip('frames test-using custom command', ()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe')
       cy.getIframe('#mce_0_ifr').clear().type('Welcome {cmd+a}')
         cy.get('[aria-label="Bold"]').click()
})

it('frames test-using cypress-iframe plugin', ()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr')
            cy.iframe('#mce_0_ifr').clear().type('Welcome {cmd+a}')
                cy.get('[aria-label="Bold"]').click()
       
})



})