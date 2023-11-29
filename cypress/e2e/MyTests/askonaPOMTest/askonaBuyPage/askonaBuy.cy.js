import askonaBUY from "../askonaBuyPage/askonaBuyTest"

describe('askona-Buy-Page', () => {
    it('askona-Buy', () => {
        cy.get("li[id='category-slider_main-slide06'] a[class='category-slider__link']").invoke('removeAttr', 'target').click();
        cy.get('a.product-card__title[href="/divany/trenton-s-korobom-dlya-belya/"]').scrollIntoView({duration:1000}).invoke('removeAttr', 'target').click();
        cy.wait(3000);
        cy.get('.btn.btn--accent.add2basket').click();
        cy.wait(3000);
        cy.get('.btn.btn--accent.add2basket').invoke('removeAttr', 'target').click();
        cy.wait(3000);
        cy.get('input#order-input-43').type('111111111');
        cy.get('input#order-input-39').type('Ivan');
        cy.get('input#order-input-77').type('Ivanov');
        cy.get('input#order-input-41').type('IvanovIvan@mail.ru');
        cy.get("label[for='order-delivery-3'] span[class='checkbox__switcher checkbox__switcher--radio']").click();
        cy.get("label[for='order-delivery-1'] span[class='checkbox__switcher checkbox__switcher--radio']").click();
        cy.get('textarea#order-input-51').type('Moscow');
        cy.get('textarea#order-input-ORDER_DESCRIPTION').type('Have a nice day');
        cy.get('[for="order-payment-16"] > .checkbox__switcher').click();
        cy.get('[for="order-payment-11"] > .checkbox__switcher').click();
        cy.get('[for="order-payment-18"] > .checkbox__switcher').click();
        cy.get('[for="order-payment-19"] > .checkbox__switcher').click();

        const ay = new askonaBUY()
            ay.clickOnCatalog();
            ay.clickOnProduct();
            ay.waitProductPage();
            ay.clickOnBuyButton();
            ay.waitSecondProductPage();
            ay.clickSecondOnBuyButton();
            ay.waitThirdProductPage();
            ay.inputFirstField();
            ay.inputSecondField();
            ay.inputThirdField();
            ay.inputFourthField();
            ay.clickOnFirstDeliveryCheckbox();
            ay.clickOnSecondDeliveryCheckbox();
            ay.inputOnFirstCommentArea();
            ay.inputOnSecondCommentArea();
            ay.clickOnFirstPayCheckbox();
            ay.clickOnSecondPayCheckbox();
            ay.clickOnThirdPayCheckbox();
            ay.clickOnFourthPayCheckbox();
    });

})