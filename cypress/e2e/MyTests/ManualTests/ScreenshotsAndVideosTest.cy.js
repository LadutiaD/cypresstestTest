describe('Screenshots-Video-Test', ()=>{
    it.skip('Capture-Screenshots', ()=>{
        cy.visit('https://demo.opencart.com/')                                                      //позволяет делать скриншот во время тестов
            cy.screenshot('homepage')
            cy.wait(3000)
            cy.get("img[title='Your Store']").screenshot('logo') 


    })

    it('Capture-Video', ()=>{
        cy.visit('https://demo.opencart.com/')                                                      //позволяет делать видео во время тестов  (прописать в терминал npx cypress run и скопировать правой кнопкой мыши на проект "Copy Relative Path" вставить путь после команды)
           cy.get('li:nth-child(7) a:nth-child(1)').click()
           cy.get("div[id='content'] h2").should('have.text', 'Tablets')

    })
})