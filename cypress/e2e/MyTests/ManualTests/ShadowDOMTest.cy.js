

it('UploadFileWithShadowDOM', ()=>{                                                                                     //проверка на загрузку файла на сайт при скрытых элементах для загрухки (например отсутствует кнопка загрузки или нет возможности перетащить файл) ShadowDOM
    cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('WoW.jpg')
            cy.wait(5000)
                cy.get('.smart-item-name', {includeShadowDom:true}).contains('WoW.jpg')
            

})

cy.get('button#blz-nav-wow-game-info.is-dropdown[analytics-label="Информация об игре"]', {includeShadowDom:true}).trigger('mouseover').click({force:true});  // позволяет провести взаимодействие с кнопкой из которой выходит попап с информацией (пример: сайт worldfowarcraft, кнопка "информация об игре")