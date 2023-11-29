describe('askona-Title-Test', () => {
    it('askona-Title', () => {
        cy.visit('https://askona.by/');
        cy.title().should('include', 'Официальный сайт Askona в Минске - Интернет-магазин мебели для спальни в Беларуси')
        .and('eq', 'Официальный сайт Askona в Минске - Интернет-магазин мебели для спальни в Беларуси')
        .and('contain', 'Официальный сайт Askona в Минске');
    })
})