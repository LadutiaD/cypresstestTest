
describe('Fixtures-JSON-Test', ()=>{                                                                                            //проверка авторизации на сайте через данные находяиещся в JSON файле
    /*it('FixturesDemoTest', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/')
            cy.fixture('JSONTest').then((data)=>{
                cy.get('input[placeholder="Username"]').type(data.username)
                    cy.get('input[placeholder="Password"]').type(data.password)
                        cy.get('button[type="submit"]').click()
                            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
                                .should('have.text', data.expected)

            })
            

    })*/

    let userdata                                                                                                                //проверка авторизации на сайте через данные находяиещся в JSON файле при помощи переменной для множемтвенной проверки
    before(()=>{
        cy.fixture('JSONTest').then((data)=>{
            userdata=data;
        })
    })

    it('FixturesDemoTest2', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/')
            cy.get('input[placeholder="Username"]').type(userdata.username)
                cy.get('input[placeholder="Password"]').type(userdata.password)
                    cy.get('button[type="submit"]').click()
                        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
                            .should('have.text', userdata.expected)

    })
})