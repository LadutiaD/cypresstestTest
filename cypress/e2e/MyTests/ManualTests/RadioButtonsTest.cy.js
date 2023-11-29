/// <reference types="Cypress" />

// describe('RadioButtons-Test', () => {

//     it('radiobuttons-test', () => {
//         cy.visit('https://askona.by/')
//             cy.get('#splide01-slide01 > #bx_972056844_17151_98d20d8dfdb327621a18976aad27fb5f > .product-card__container > .product-card__title').click()
//                 cy.get('.card__buttons > .btn--accent').click()
//         
//                         cy.get('.card__buttons > .btn--accent').click()
//                             cy.get('#order-delivery-1').should('be.visible')                             //проверка на видимость radiobutton 
//                                 cy.get('#order-delivery-3').should('be.visible')
//                 //         cy.get(':nth-child(1) > .radiobutton__description').check().should('be.checked')  // проверка check может быть вызвана только на объектах :checkbox и :radio
//                 //             cy.get(':nth-child(2) > .radiobutton__description').should('not.be.checked')



//     })



    describe('Check-Boxes-Test', () => {

        it('checkboxes-test', () => {

          cy.visit('https://askona.by/')  
            cy.get('body > main:nth-child(9) > article:nth-child(1) > div:nth-child(6) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(23) > a:nth-child(1) > img:nth-child(1)').click()
                cy.get('.catalog-filters__left > :nth-child(3) > .checkbox__btn').click()
                   // cy.get('input#preview_arrFilter_307_2353481008').should('be.visible')
                        cy.get('input#preview_arrFilter_307_2353481008').check().should('be.checked')                       //проверка не может быть вызвана на объектах с шириной и высотой - 0px


    })
})