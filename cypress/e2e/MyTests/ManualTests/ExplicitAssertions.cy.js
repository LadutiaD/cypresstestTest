describe('Explicit-Assertions-test', () =>{
    it('explicit assertions', () =>{

        cy.visit('https://av.by/')
        cy.get('#authPhone').type('11111111111') //проверка на ввод данных в поле ввода
        cy.get('#passwordPhone').type('11111111111')
        cy.get('div[class="auth__submit"]').click()
       
  })
})