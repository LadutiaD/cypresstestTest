import askonaURL from "../askonaPOMTest/askonaURL/askonaTest"
import askonaBUY from "../askonaPOMTest/askonaBuyPage/askonaBuyTest"
import askonaLOGO from "../askonaPOMTest/askonaLogo/askonaLogoTest";


describe('askona-Test', () => {
    beforeEach('clear-Cookie-Visit-Page', () => {
        cy.clearCookies();
        cy.visit('https://askona.by/');
    });

    
    it('url', () => {
        const au = new askonaURL()
            au.visitWebPage();
            au.checkWebPage(); 
    });

    it('logo', () => {
        const al = new askonaLOGO()
            al.checkLogoExist();
    });

    it('buy', () => {
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

