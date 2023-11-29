import askonaURL from "./askonaTest"

describe('Askona-Test', () => {
    it('url-test', () => {
        cy.visit('https://askona.by/');
        cy.url().should('include', 'askona.by/')
        .and('eq', 'https://askona.by/')
        .and('contains', 'askona.by');

    const au = new askonaURL()
        au.visitWebPage();
        au.checkWebPage();    

    });
});