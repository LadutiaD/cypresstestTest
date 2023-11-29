describe('URLTest', () => {
    it('URL-Positive-Negative-Test', () => {
      cy.visit("https://av.by/")
        cy.url().should('include','av.by')                      //проверка include(включения в себя)
            .and('eq','https://av.by/')                            //проверка equality(равенство)
            .and('not.eq','https://av.by1/')
            .and('contain','av')                                    //проверка contain(содержание в себе)
            .and('not.contain','av1')
    })
})
    