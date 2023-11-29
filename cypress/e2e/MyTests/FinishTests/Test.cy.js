import URL from "../POMTests/URLPOM/URLPOMTest"
import Logo from "../POMTests/LogoPOM/LogoPOMTest"
import Login from "../POMTests/LoginPOM/LoginPOMTest"
import User from "../POMTests/UserPOM/UserPOMTest"
import Mouse from "../POMTests/MouseBehaviorPOM/MouseBehaviorPOMTest"
import Back from "../POMTests/NavigationPOM/NavigationPOMTest"


describe('Test', ()=>{
    beforeEach('Open-Site', () => {
        cy.visit('https://av.by/')
    })

    it('URL', ()=>{                                                             
        const ul = new URL();
            ul.followTheLink('https://av.by/');
            ul.checkTheLink();
        })

    it('Logo', () => {
        const lo = new Logo();
            lo.logoExist();
        })

    it('Login', () => {
        const ln = new Login();
            ln.openLogin();
            ln.loginTitleExist();
            ln.inputValidNumber('297433955');
            ln.inputValidPassword('195321ab');
            ln.entranceInLogin();
        })

    it('User', () => {
        const ur = new User();
            ur.userCheck();
        })

    it('Mouse', () => {
        const me = new Mouse();
            me.clickElement()
            me.waitPage()
            me.scrollPage()
            me.clickSecondElement()
            me.waitSecondPage()
            me.clickThirdElement()
            me.scrollSecondPage()
            me.clickFourthElement()
            me.clickFifthElement()
        })

    it('Back', () => {
        const bk = new Back()
            bk.goBack()
            bk.goSecondBack()
        })
                                           
    })
    