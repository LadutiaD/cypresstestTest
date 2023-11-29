describe('Assertions-test', () =>{
    it('assertions', () =>{

        cy.visit('https://av.by/')
        /*cy.url().should('include','av.by')
        .should('eq','https://av.by/')
        .should('contain','av')*/

        cy.url().should('include','av.by')
        .and('eq','https://av.by/')
        .and('contain','av')
        .and('not.contain','av1')
  })
})