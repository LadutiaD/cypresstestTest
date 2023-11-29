describe('clickTest', () => {
    it('Click-Positive-Test', () => {
        cy.visit("https://av.by/")
        cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title').click()
        cy.scrollTo(0, 1000)
        cy.get('a.listing-item__link[href="/toyota/camry/106158328"]').click()
        cy.get('.card__contact > .button--default').click()
      })

    it('Click-Negative-Test', () => {
        cy.visit("https://av.by/")
        cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title').click()
        cy.scrollTo(0, 1000)
        cy.get('a.listing-item__link[href="/toyota/camry/106158328"]').click()
        cy.get('.card__contact > .button--default123').click()
      })

    })