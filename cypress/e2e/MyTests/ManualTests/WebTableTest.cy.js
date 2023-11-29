describe('Web-Table-test', ()=>{                  
    beforeEach('Login', ()=>{                                                                                     //автоматический ввод начальных данных перед тестами 
        cy.visit('https://demo.opencart.com/admin/index.php')
            cy.get('#input-username').type('demo')
                cy.get('#input-password').type('demo')
                    cy.get('button[type="submit"]').click()
                        cy.get('.btn-close').click()
                            cy.get('#menu-customer>a').click()
                                cy.get('#menu-customer>ul>li:first-child').click()

    })

    it.skip('rows-columns-test', ()=>{                                                                         //проверка количества рядов и колонн
        cy.get('table.table.table-bordered.table-hover>tbody>tr').should('have.length','10')
            cy.get('table.table.table-bordered.table-hover>thead>tr>td').should('have.length','7')


    })

    it.skip('cell-data-row-column', ()=>{                                                                               //проверка наличия определенной информации в рядах и колоннах
        cy.get('table.table.table-bordered.table-hover>tbody>tr:nth-child(5)>td:nth-child(3)')
        .contains('hfgjhgjgjggj@gmail.com')


    })

    it.skip('Read-all-rows-columns-in-the-first-page', ()=>{                                                           // проверка наличия колонн и рядов на всех страницах пагинации
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(($row, index, $rows)=>{
            cy.wrap($row).within( ()=>{
                cy.get('td').each( ($col, index, $cols)=>{
                    cy.log($col.text())
                })

            })

        })



    })

    it.skip('Pagintaion-test', ()=>{                                                                                        // проверка наличия всех страниц пагинации
        let totalPages
            cy.get('.col-sm-6.text-end').then( (e)=>{
                let mytext=e.text()
                totalPages=mytext.substring(mytext.indexOf('(')+1, mytext.indexOf('Pages')-1)
                    cy.log('Total number of pages in a table===>'+totalPages)
        })

    })

    it('Number-of-pugination', ()=>{                                                                                    // проверка перехода пагинации 
        let allPages=5          
        for(let p=1;p<=allPages;p++)
        {
            if(allPages>1)
            {
                cy.log('Active page===>'+p)
                    cy.get('ul[class="pagination"]>li:nth-child('+p+')').click()
                    cy.wait(3000)

                    cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
                        .each(($row, inde, $rows)=>{
                            cy.wrap($row).within(()=>{
                                cy.get('td:nth-child(3)').then((e)=>{
                                    cy.log(e.text())
                        })
                    })

                })

            }
        }


    })

})