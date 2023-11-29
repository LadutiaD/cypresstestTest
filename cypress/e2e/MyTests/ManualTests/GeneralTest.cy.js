describe('GeneralTest', () => {
    it('Title-Positive-Test', () => {
        cy.visit("https://av.by/")
        cy.title().should('eq', 'av.by — купить, продать авто в Беларуси. Автомобили новые и с пробегом на Автомалиновке.')
      })
    
    it('Title-Negative-Test', () => {
        cy.visit("https://av.by/")
        cy.title().should('eq', 'av.by — купить, продать авто в Беларуси. Автомобили новые и с пробегом на Автомалиновке.123')
      })

    /*it("Catalog-Positive-Test", () => {
        cy.visit("https://av.by/")
        cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title').click()
      })

    it("Catalog-Negative-Test", () => {
        cy.visit("https://av.by/")
        cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title123').click()
      })

    it('Scroll-Positive-Test', () => {
        cy.visit("https://av.by/")
        cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title').click()
        cy.scrollTo(0, 1000)
        cy.scrollTo(1000, 0)
      })

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

      it('Input-Positive-Test', () => {
        cy.visit("https://av.by/")
        cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title').click()
        cy.scrollTo(0, 1000)
        cy.wait(5000)
        cy.get('a.listing-item__link[href="/toyota/camry/106158328"]').click()
        cy.wait(5000)
        cy.get('.card__contact > .button--default').click()
        cy.get('#authPhone').type('111111111')
        cy.get('#passwordPhone').type('111111111')
        cy.get('button.drawer__close[type="button"]').click()
     })

    it('Input-Negative-Test', () => {
        cy.visit("https://av.by/")
        cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title').click()
        cy.scrollTo(0, 1000)
        cy.wait(5000)
        cy.get('a.listing-item__link[href="/toyota/camry/106158328"]').click()
        cy.wait(5000)
        cy.get('.card__contact > .button--default').click()
        cy.get('#authPhone').type('111111111')
        cy.get('#passwordPhone').type('11111111111111111111111111111111111111111111111111')
        cy.get('button.drawer__close[type="button"]').click()
     })*/

})
