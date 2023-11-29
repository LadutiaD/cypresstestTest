require('cypress-xpath')
describe('XpathTest', () =>{
    it('find', () =>{
        cy.visit('https://av.by/')
        cy.xpath("//div[@class='service-teasers__list']/article").should('have.length', 6)
    })

    it('find', () =>{
        cy.visit('https://av.by/')
        cy.xpath("//div[@class='service-teasers__list']").xpath("./article").should('have.length', 6)
    })
})

// Пример проверки наличия определенного количества элементов в блоке 
