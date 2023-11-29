describe('spanTest', () => {
    it('Span-Positive-Test', () => {
        cy.visit("https://av.by/")
        cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title').click()
        cy.scrollTo(0, 1000)
        cy.get('a.listing-item__link[href="/toyota/camry/106158328"]').click()
      })
      
      it('Span-Negative-Test', () => {
        cy.visit("https://av.by/")
        cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title').click()
        cy.scrollTo(0, 1000)
        cy.get('a.listing-item__link[href="/toyota/camry/106158328123"]').click()
      })  
    })