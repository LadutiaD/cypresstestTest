describe('ScrollTest', () => {
    it('Scroll-Positive-Test', () => {
        cy.visit("https://av.by/")
        cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title').click()
        cy.scrollTo(0, 1000)
        cy.scrollTo(1000, 0)
      })

    it('Scroll-Positive-Test', () => {
        cy.visit("https://av.by/")
        cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title').click()
        cy.scrollTo(0, 1000)
      })  

    })