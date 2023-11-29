class User
{
    userCheck()
    {
        cy.get('.nav__dropdown-name').should('have.text', "Дмитрий")
    }
}

export default User