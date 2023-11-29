import askonaLOGO from "../askonaLogo/askonaLogoTest"

describe('askona-Logo-Test', () => {
    it('askona-Logo', () => {
        cy.get("img[alt='logo']").should('be.visible')
        .and('exist');

        const al = new askonaLOGO()
            al.checkLogoExist();

    })
})