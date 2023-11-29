
describe('Tab-tests', (()=>{

    it.skip('tabstest', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
            cy.get('.example >a').invoke('removeAttr', 'target').click()  //убирает элемент со страницы с его помощью можно делать проверку в кладок не открывая новые в браузере, а заменять имеющююся на новую
                cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
                    cy.wait(5000)
                        cy.go('back')


    })


    it('tabstest', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
            cy.get('.example >a').then((e)=>{
                let url=e.prop('href')
                    cy.visit(url)

            })
            cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
                    cy.wait(5000)
                        cy.go('back')



    })


}))