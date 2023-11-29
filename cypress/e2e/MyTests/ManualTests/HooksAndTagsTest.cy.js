//before
//after
//beforeEach (перед каждым)
//AfterEach (после каждого)

describe('Hooks-Tags-Test', ()=>{                                                                                     // конструкция работы хуков               before
    before(()=>{                                                                                                                                                     
        cy.log('**** Launch App ****')                                                                                //                                           beforeEach ==
    })                                                                                                                //                                                        ====1 (тест)
                                                                                                                      //                                           afterEach  ==
    after(()=>{                                                                                                       //                                                             
        cy.log('**** close App ****')                                                                                 //                                           beforeEach ==
    })                                                                                                                //                                                        ====2 (тест)
                                                                                                                      //                                           afterEach  ==
    beforeEach(()=>{                                                                                                  //
        cy.log('**** Login ****')                                                                                     //                                           beforeEach ==
    })                                                                                                                //                                                        ====3 (тест)
                                                                                                                      //                                           afterEach  ==
    afterEach(()=>{                                                                                                   //
        cy.log('**** Logout ****')                                                                                    //                                         after
    })                                                                                                              
    it('search-test', ()=>{                                                                                         
        cy.log('**** searching ****')                                                                               
    })                                                                                                              
                                                                                                                    
    it('advanced-search-test', ()=>{                                                                                                                         
        cy.log('**** advanced search ****')
    })

    it('listing-products-test', ()=>{
        cy.log('**** listing-products ****')
    })
})