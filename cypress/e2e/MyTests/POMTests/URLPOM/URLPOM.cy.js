import URL from "../URLPOM/URLPOMTest.js"

describe('URLPOMTest', ()=>{                                        //мануальный тест 
    it.skip('Check-URL', ()=>{
        cy.visit('https://av.by/')
        cy.url().should('include','av.by')
        .and('eq','https://av.by/')
        .and('contain','av')
    })

    it('Check-URL', ()=>{                                                               //тест с приминением POM
        const ul = new URL();
        ul.followTheLink('https://av.by/');
        ul.checkTheLink();       
    })
})