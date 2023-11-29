class Mouse

{
    clickElement()
    {
        cy.get(':nth-child(4) > :nth-child(5) > .catalog__link > .catalog__title').trigger('mouseover').click()
    }
    
    waitPage()
    {
        cy.wait(5000)
    }

    scrollPage()
    {
        cy.get("a[href='/toyota/camry/105794687']").scrollIntoView({duration:2000})
    }

    clickSecondElement()
    {
        cy.get("a[href='/toyota/camry/105794687']").click()
    }

    waitSecondPage()
    {
        cy.wait(5000)
    }

    clickThirdElement()
    {
        cy.get('.gallery__arrow--right > .gallery__arrow-button').click()
    }

    scrollSecondPage()
    {
        cy.get('.card__contact > .button--default').scrollIntoView({duration:2000})
    }

    clickFourthElement()
    {
        cy.get('.card__contact > .button--default').click()
    }

    clickFifthElement()
    {
        cy.get("button[title='Закрыть']").click()
    }
}

export default Mouse
