describe('LogoTest', () => {
    it('Logo-Positive-Negative-Test', () => {
      cy.visit("https://av.by/")
        cy.get('.header__logo-wrap').should('be.visible')     //проверка be.visible(элемент видимый на странице)
            .and('exist')                                       //проверка exist(элемент существует на странице)
    })
})