describe('Custom-Commands', ()=>{
    it.skip('link-test', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
           // cy.get('div[class="item-grid"] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)').click()            // стандартная команда для клика на ссылку
                cy.clickLink('Apple MacBook Pro 13-inch')                                                                                           //кастомная команда для клика на ссылку
                    cy.get('div[class="product-name"] h1').should('have.text', 'Apple MacBook Pro 13-inch')
    })

    it.skip('overwting-existing-command', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
            cy.clickLink('APPLE MACBOOK PRO 13-inch')                                                                                           //кастомная команда для клика на ссылку
                cy.get('div[class="product-name"] h1').should('have.text', 'Apple MacBook Pro 13-inch')

    })

    it('Login-custom-command', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('Log in')
        cy.loginApp('testing@gmail.com', 'test123')
        cy.get('.ico-account').should('have.text', 'My account')


    })

})