class askonaLOGO
{
    checkLogoExist()
    {
        cy.get("img[alt='logo']").should('be.visible')
        .and('exist');
    }
}

export default askonaLOGO