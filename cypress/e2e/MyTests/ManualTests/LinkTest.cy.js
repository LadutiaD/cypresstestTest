describe('LinkTest', () => {
    it('Link-Positive-Negative-Test', () => {
      cy.visit("https://av.by/")
        cy.xpath('//a').should('have.length', '10')   //проверка //a (количества ссылок на странице)
    })
})                                                   //проверка have.length (указание значения)