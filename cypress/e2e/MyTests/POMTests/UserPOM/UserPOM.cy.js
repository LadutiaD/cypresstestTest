import User from "../UserPOM/UserPOMTest"

describe('UserPOM', ()=>{
    it.skip('User', ()=>{
        cy.get('.nav__dropdown-name').should('have.text', "Дмитрий")
    })

    it('User', ()=>{
        const ur = new User();
        ur.userCheck();
    })
})