describe('Alerts-Test', ()=>{
    it.skip('confirm-alertstest', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.get('button[onclick="jsAlert()"]').click()
                cy.on('window:alert',(t)=>{
                    expect(t).to.contains('I am a JS Alert')


                })
                cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it.skip('confirm-alertstest-okbutton', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.get('button[onclick="jsConfirm()"]').click()
                cy.on('window:confirm',(t)=>{
                    expect(t).to.contains('I am a JS Confirm')


        })
        
        cy.get('#result').should('have.text', 'You clicked: Ok')

    })

    it.skip('cancel-alertstest', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.get('button[onclick="jsConfirm()"]').click()
                cy.on('window:confirm',(t)=>{
                    expect(t).to.contains('I am a JS Confirm')


        })
        cy.on('window:confirm', ()=> false)
        
        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })

    it('authenticated-alertstest', ()=>{
      /* cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth: 
                                                                    {
                                                                        username: "admin",         //несколько варинтов 1
                                                                        password: "admin"
                                                                    }
                                                                })

       cy.get('div[class="example"] p').should('have.contain',"Congratulations") */                     
       
       cy.visit('https://the-internet.herokuapp.com/basic_auth')                                    // 2
        cy.get('div[class="example"] p').should('have.contain',"Congratulations")                                                             

    })

})