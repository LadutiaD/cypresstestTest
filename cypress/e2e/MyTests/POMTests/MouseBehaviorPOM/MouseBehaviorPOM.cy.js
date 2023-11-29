import Mouse from "../MouseBehaviorPOM/MouseBehaviorPOMTest"

describe('MousePOM', ()=>{
    it.skip('Click-scroll', ()=>{
    cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title').trigger('mouseover').click()
    cy.get("a[href='/toyota/land-cruiser/104392999']").scrollIntoView({duration:2000})
    cy.get("a[href='/toyota/land-cruiser/104392999']").click()
    cy.wait(5000)
    cy.get('.gallery__arrow--right > .gallery__arrow-button').click()
    cy.get('.card__contact > .button--default').scrollIntoView({duration:2000})
    cy.get('.card__contact > .button--default').click()
    cy.get('.drawer__close > svg').click()
                            
                
    })

    it('Click-scroll', ()=>{
        const me = new Mouse();
        me.clickElement()
        me.waitPage()
        me.scrollPage()
        me.clickSecondElement()
        me.waitSecondPage()
        me.clickThirdElement()
        me.scrollSecondPage()
        me.clickFourthElement()
        me.clickFifthElement()                       
                
    })
})