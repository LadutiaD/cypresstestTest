import QuantityWoW from "../Quantity/QuantityWoWTest"
describe('Quantity-WoW', () => {
    it('Quantity', () => {
        cy.xpath("//body/div").should('have.length', 4)

        const qy = new QuantityWoW();
        qy.checkQuantityElement();
    })
})