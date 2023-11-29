
describe('TitleTest', () => {
  it('Title-Positive-Negative-Test', () => {
    cy.visit("https://av.by/")
      cy.title().should('include', 'av.by — купить, продать авто в Беларуси. Автомобили новые и с пробегом на Автомалиновке.') //проверка include(включения в себя)
        .and('eq', 'av.by — купить, продать авто в Беларуси. Автомобили новые и с пробегом на Автомалиновке.')          //проверка equality(равенство)
        .and('not.eq', 'av.by — купить, продать авто в Беларуси. Автомобили новые и с пробегом на Автомалиновке123.')
        .and('contain', 'av')                                                                                             //проверка contain(содержание в себе)
        .and('not.contain', 'av1')
  })
})

  /*it('Title-Negative-Test', () => {
    cy.visit("https://av.by/")
    cy.title().should('eq', 'av.by — купить, продать авто в Беларуси. Автомобили новые и с пробегом на Автомалиновке.123')
    cy.url().should('include','av.by1')
      .and('eq','https://av.by1/')
      .and('contain','av1')
  })*/



