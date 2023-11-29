class QuantityWoW
{
    checkQuantityElement()
    {
        cy.xpath("//body/div").should('have.length', 4)
    }
}

export default QuantityWoW