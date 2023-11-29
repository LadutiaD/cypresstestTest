describe('Catalog', () => {

it("Catalog-Positive-Test", () => {
    cy.visit("https://av.by/")
    cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title').click()
})

it("Catalog-Negative-Test", () => {
    cy.visit("https://av.by/")
    cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title123').click()
})

})