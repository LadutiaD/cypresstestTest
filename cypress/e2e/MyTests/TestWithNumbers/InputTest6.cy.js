describe('inputTest', () => {
    it('Input-Positive-Test', () => {
        cy.visit("https://av.by/")
            cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title').click()
             cy.scrollTo(0, 1000)
              cy.wait(5000)
               cy.get('a.listing-item__link[href="/toyota/camry/106158328"]').click()
                cy.wait(5000)
                 cy.get('.card__contact > .button--default').click()
                  cy.get('#authPhone').type('11111111111') 
                   cy.get('#authPhone').should('have.value', '+375 11 111 11 11')
        // cy.get('#authPhone').type('111111111')
        // cy.get('#passwordPhone').type('111111111')
        // cy.get('.drawer__slide--active > .drawer__slide-body > .auth > .tabs > .tablist > [aria-selected="false"]').click()
        // cy.get('#authLogin').type('goodDay@mail.ru')
        // cy.get('#loginPassword').type('111111111')
        // cy.get('button.drawer__close[type="button"]').click()
     })

    // it('Input-Negative-Test', () => {
    //     cy.visit("https://av.by/")
    //     cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title').click()
    //     cy.scrollTo(0, 1000)
    //     cy.wait(5000)
    //     cy.get('a.listing-item__link[href="/toyota/camry/106158328"]').click()
    //     cy.wait(5000)
    //     cy.get('.card__contact > .button--default').click()
    //     cy.get('#authPhone').type('111111111')
    //     cy.get('#passwordPhone').type('11111111111111111111111111111111111111111111111111')
    //     cy.get('.drawer__slide--active > .drawer__slide-body > .auth > .tabs > .tablist > [aria-selected="false"]').click()
    //     cy.get('#authLogin').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    //     cy.get('#loginPassword').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    //     cy.get('button.drawer__close[type="button"]').click()
    //  })
    })