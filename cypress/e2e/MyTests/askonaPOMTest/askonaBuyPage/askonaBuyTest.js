class askonaBUY
{
    clickOnCatalog()
    {
        cy.get("li[id='category-slider_main-slide06'] a[class='category-slider__link']").invoke('removeAttr', 'target').click();
    }

    clickOnProduct()
    {
        cy.get('a.product-card__title[href="/divany/trenton-s-korobom-dlya-belya/"]').scrollIntoView({duration:1000}).invoke('removeAttr', 'target').click();
    }

    waitProductPage()
    {
        cy.wait(3000);
    }

    clickOnBuyButton()
    {
        cy.get('.btn.btn--accent.add2basket').click();
    }

    waitSecondProductPage()
    {
        cy.wait(3000);
    }

    clickSecondOnBuyButton()
    {
        cy.get('.btn.btn--accent.add2basket').invoke('removeAttr', 'target').click();
    }

    waitThirdProductPage()
    {
        cy.wait(3000);
    }

    inputFirstField()
    {
        cy.get('input#order-input-43').type('111111111');
    }

    inputSecondField()
    {
        cy.get('input#order-input-39').type('Ivan');
    }

    inputThirdField()
    {
        cy.get('input#order-input-77').type('Ivanov');
    }

    inputFourthField()
    {
        cy.get('input#order-input-41').type('IvanovIvan@mail.ru');
    }

    clickOnFirstDeliveryCheckbox()
    {
        cy.get("label[for='order-delivery-3'] span[class='checkbox__switcher checkbox__switcher--radio']").click();
    }

    clickOnSecondDeliveryCheckbox()
    {
        cy.get("label[for='order-delivery-1'] span[class='checkbox__switcher checkbox__switcher--radio']").click();
    }

    inputOnFirstCommentArea()
    {
        cy.get('textarea#order-input-51').type('Moscow');
    }

    inputOnSecondCommentArea()
    {
        cy.get('textarea#order-input-ORDER_DESCRIPTION').type('Have a nice day');
    }

    clickOnFirstPayCheckbox()
    {
        cy.get('[for="order-payment-16"] > .checkbox__switcher').click();
    }

    clickOnSecondPayCheckbox()
    {
        cy.get('[for="order-payment-11"] > .checkbox__switcher').click();
    }

    clickOnThirdPayCheckbox()
    {
        cy.get('[for="order-payment-18"] > .checkbox__switcher').click();
    }
    
    clickOnFourthPayCheckbox()
    {
        cy.get('[for="order-payment-19"] > .checkbox__switcher').click();
    }

}   

export default askonaBUY