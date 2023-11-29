import 'cypress-file-upload'

describe('File-Uploads-Test', ()=>{                                                                                         //проверка на загрузку файла на сайт
    it.skip('SingleFileUpload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
            cy.get('#file-upload').attachFile('WoW.jpg')
                cy.get('#file-submit').click()
                    cy.wait(5000)
                        cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!')
        
    })

    it.skip('SingleFileUploadRename', ()=>{                                                                                            //проверка на изменени названия файла и загрузку на сайт
        cy.visit('https://the-internet.herokuapp.com/upload')
            cy.get('#file-upload').attachFile({filePath:'WoW.jpg', fileName:'myfile.jpg'})
                cy.get('#file-submit').click()
                    cy.wait(5000)
                        cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!')

    })

    it.skip('FileUploadDragAndDrop', ()=>{                                                                                               //проверка на перетаскивания файла для загрузки на сайт
        cy.visit('https://the-internet.herokuapp.com/upload')
           cy.get('#drag-drop-upload').attachFile('WoW.jpg', {subjectType:'drag-n-drop'})
              cy.wait(5000)
                 cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
                    .contains('WoW.jpg')

    })

    it.skip('UploadMultipleFiles', ()=>{                                                                             //проверка на загрузку двух файлов на сайт
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
            cy.get('#filesToUpload').attachFile(['WoW.jpg', 'WoWBC.jpg'])
                cy.wait(5000)
                    cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:')

    })

    it('UploadFileWithShadowDOM', ()=>{                                                                                     //проверка на загрузку файла на сайт при скрытых элементах для загрухки (например отсутствует кнопка загрузки или нет возможности перетащить файл) ShadowDOM
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
            cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('WoW.jpg')
                cy.wait(5000)
                    cy.get('.smart-item-name', {includeShadowDom:true}).contains('WoW.jpg')
                

    })
})