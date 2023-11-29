import Logo from "../LogoPOM/LogoPOMTest.js"

describe('LogoPOMTest', ()=>{
    it.skip('Logo-Positive-Negative-Test', () => {
        cy.visit("https://av.by/")
          cy.get('.header__logo-wrap').should('be.visible')     
              .and('exist')                                       
      })

    it('Logo', ()=>{
        const lo = new Logo();
        lo.logoExist();
    })
})