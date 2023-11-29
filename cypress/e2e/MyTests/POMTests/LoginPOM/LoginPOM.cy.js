import Login from "./LoginPOMTest.js"

describe('LoginPOMTest', ()=>{
    it.skip('Login', ()=>{
    cy.get("a[rel='nofollow'] span[class='nav__link-text']").click()
    cy.title().should('include', 'Вход')
    cy.get('#authPhone').type('297433955')
    cy.get('#passwordPhone').type('195321ab')
    cy.get('button[class="button button--action"]').click()
                        
    })

    it('Login', ()=>{
     const ln = new Login()
     ln.openLogin();
     ln.loginTitleExist();
     ln.inputValidNumber('297433955');
     ln.inputValidPassword('195321ab');
     ln.entranceInLogin();
                        
    })
})