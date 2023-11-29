class OffersWoW
{
    waitOffersPage()
    {
        cy.wait(3000)    
    }

    openOffers()
    {
        cy.get("a[href='https://careers.blizzard.com/']", {includeShadowDom:true}).scrollIntoView({duration:2000}).click({force:true});
    }

    chooseRole()
    {
        cy.get('.ph-line-height-1_2 > font > span').scrollIntoView({duration:2000}).click();  
    }

    scrollToOffer()
    {
        cy.get('[key-role="8uZ0jk-gdpr-cardListItemRole"] > .ph-media-cc-view1 > .ph-cc-d-m-b-0 > .link > .action-link > ppc-content').scrollIntoView({duration:2000});
    }

    clickOnVacation()
    {
        cy.get('a.au-target[href="https://careers.blizzard.com/global/en/job/R021581/Software-Testing-Engineer"]').click();
    }

    lookOnVacation()
    {
        cy.get('.bottom-jobaction > .btn > ppc-content').scrollIntoView({duration:2000});
    }
}


export default OffersWoW