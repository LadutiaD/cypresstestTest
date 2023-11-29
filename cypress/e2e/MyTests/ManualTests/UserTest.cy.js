describe('User--test', () =>{
    it('user test', () =>{
        cy.visit('https://av.by')
         cy.get('a.nav__link[href="/login"]').click()
            cy.get('#authPhone').type('297433955')
                cy.get('#passwordPhone').type('195321ab')
                    cy.get('button[class="button button--action"]').click()

        let expName="Дмитрий";                     // переменная ожидаемого имени 
         cy.get('.nav__dropdown-name').then( (x)=>{
           let actName=x.text()                          // переменная актуального имени
           expect(actName).to.equal(expName)               // BDD ожидаемые проверки
           expect(actName).to.not.equal(expName)

           assert.equal(actName, expName)               // TDD утверждающие проверки
           assert.notEqual(actName, expName)
         })
       
  })
})