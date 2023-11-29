/// <reference types="Cypress" />

describe('DropDowns-Test', ()=>{


     it.skip('dropdowns with selector test', ()=>{

         cy.visit('https://av.by/')
         cy.get('button[title="Марка"]')                 // для этой проверки тип должен быть selector
        .select('BMW')
        .should('have.value', 'BMW')                                             
        

     })

     it.skip('dropdowns without selector test', ()=>{

         cy.visit('https://av.by/')
             cy.get('button[title="Марка"]').click()                                                             // проверка выбора селектора 
                cy.get('.dropdown__input').type('BMW').type('{enter}')
                    cy.get('button[title="BMW"]')
                    .should('have.text', 'Марка BMW')

     })

    it.skip('input dropdowns test', ()=>{

        cy.visit('https://www.wikipedia.org/')
            cy.get('#searchInput').type('World of Warcraft')
                cy.get('.suggestion-title').contains('World of Warcraft: Mists of Pandaria').click()
    })

    it('dynamic input dropdowns test', ()=>{                                        // проверка динамического перехода страницы
 
        cy.visit('https://www.google.com/')
            cy.get('#APjFqb').type('world of warcraft')
                cy.wait(3000)
                    cy.get('div.wM6W7d>span').should('have.length', 12)
                        cy.get('div.wM6W7d>span').each( ($el, index, $list)=>{
                            if($el.text()=='world of warcraft 3')
                            {
                                cy.wrap($el).click()
                            }
                })
                    cy.get('#APjFqb').should('have.value', 'world of warcraft 3')
    })
})