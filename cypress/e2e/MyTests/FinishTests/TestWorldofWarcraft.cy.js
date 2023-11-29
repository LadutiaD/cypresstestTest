import URLWoW from "../WoWPOMTests/URL/URLWoWTest"
import LogoWoW from "../WoWPOMTests/Logo/LogoWoWTest"
import LoginWoW from "../WoWPOMTests/Login/LoginWoWTest"
import QuantityWoW from "../WoWPOMTests/Quantity/QuantityWoWTest"
import NewsWow from "../WoWPOMTests/News/NewsWoWTest"
import ForumsWoW from "../WoWPOMTests/Forums/ForumsWoWTest"
import OffersWoW from "../WoWPOMTests/Offers/offersWoWTest"
import {sendMochawesomeReportToDiscord} from "/Users/d.ladutko/.vscode/Automation Cypress Tests/script.js"
import ClassesWoW from "../WoWPOMTests/Classes/classesWoWTest"
import accountWoWIn from "../WoWPOMTests/AccountIn/accountWoWInTest"

describe('WoW-Site-Test', () => {
    beforeEach('Open-Site', () => {
        cy.clearCookies()
        cy.visit('https://worldofwarcraft.blizzard.com/ru-ru/');
    });

    it('URL', () => {
        const uw = new URLWoW();
            uw.checkWoWSiteTransitionURL();
            uw.checkWoWSiteExistURL();
    });

    it('Logo', () => {
        const lw = new LogoWoW();
            lw.logoWoWExist();
    });

    it.only('accountIn', () => {
        const an = new accountWoWIn();
            an.chooseAccountButton();
            an.clickOnAccountIn();
    });
    

    it.only('Login', () => {
        cy.origin('https://eu.account.battle.net/login/ru/', () => {
            cy.visit('https://eu.account.battle.net/login/ru/');
            cy.get('#login-header').should('have.text', 'Авторизоваться');
            cy.get('#accountName').type('ladutiadima@mail.ru');
            cy.get('#password').type('195321abv');
            cy.get('#submit').invoke('removeAttr', 'target').click();
         });
    });


    it('Quantity', () => {
        const qy = new QuantityWoW();
            qy.checkQuantityElement();
    });

    it('News', () => {
        const nw = new NewsWow();
            nw.screenWidth();
            nw.clickOnNews();
            nw.scrollToDractir();
            nw.clickOnDractir();
            nw.scrollToText();
    });

    it('Forums', () => {
        const fw = new ForumsWoW();
            fw.fullScreenPage();
            fw.clickOnCommunity();
            fw.clickOnForums();
            fw.clickOnList();
    });

    it('Offers', () => {
        cy.visit('https://worldofwarcraft.blizzard.com/ru-ru/');
        cy.wait(3000);
        cy.get("a[href='https://careers.blizzard.com/']", {includeShadowDom:true}).scrollIntoView({duration:2000}).click({force:true});
        
        //cy.get('.cookie-button-area > .primary-button > ppc-content').click();
        cy.setCookie('muc_ads', 'a538eb9c-6c4b-488c-8380-1e94f51ab9a8', {domain: '.t.co'});
        cy.setCookie('personalization_id', '"v1_Pk9bt7DlHKpy3uhuNaF5Mw=="', {domain: '.twitter.com'});
        cy.setCookie('_ga_HM5PSBP4JR', 'GS1.3.1700738588.2.1.1700739813.0.0.0', {domain: '.careers.blizzard.com'});
        cy.setCookie('OptanonConsent', 'isGpcEnabled=0&datestamp=Thu+Nov+23+2023+14%3A23%3A35+GMT%2B0300+(%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C+%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%BD%D0%BE%D0%B5+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)&version=202302.1.0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=1%3A1%2C2%3A1%2C3%3A1%2C4%3A1%2C8%3A1&AwaitingReconsent=false', {domain: '.blizzard.com'});
        cy.setCookie('_gid', 'GA1.3.694373649.1700738588', {domain: '.careers.blizzard.com'});
        cy.setCookie('in_ref', 'https%3A%2F%2Fworldofwarcraft.blizzard.com%2Fru-ru%2F', {domain: 'careers.blizzard.com'});
        cy.setCookie('PHPPPE_ACT', '62106abf-d1b8-4fac-8aa8-09e5138b1410', {domain: 'careers.blizzard.com'});
        cy.setCookie('PHPPPE_GCC', 'a', {domain: 'careers.blizzard.com'});
        cy.setCookie('_fbp', 'fb.1.1700465199511.1010483012', {domain: '.blizzard.com'});
        cy.setCookie('VISITED_LANG', 'en', {domain: 'careers.blizzard.com'});
        cy.setCookie('PLAY_SESSION', 'eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7IkpTRVNTSU9OSUQiOiI2MjEwNmFiZi1kMWI4LTRmYWMtOGFhOC0wOWU1MTM4YjE0MTAifSwibmJmIjoxNzAwNzM4NTg1LCJpYXQiOjE3MDA3Mzg1ODV9.Vk5mi7QjwIlKYyh6oXXg0KWwQsbcfbMORY76EEfKWx0', {domain: 'careers.blizzard.com'});
        cy.setCookie('PHPPPE_CVD', 'a', {domain: 'careers.blizzard.com'});
        cy.setCookie('_ga', 'GA1.3.599863706.1700465199', {domain: '.careers.blizzard.com'});
        cy.setCookie('ext_trk', 'pjid%3D62106abf-d1b8-4fac-8aa8-09e5138b1410&uid%3D18beb9fc93bbe6-1fa400-e4b5-18beb9fc93c10e9&p_in_ref%3Dhttps://worldofwarcraft.blizzard.com/ru-ru/&p_lang%3Den_global&refNum%3DBLENGLOBAL', {domain: 'careers.blizzard.com'});
        cy.setCookie('Per_UniqueID', '18beb9fc93bbe6-1fa400-e4b5-18beb9fc93c10e9', {domain: 'careers.blizzard.com'});
        cy.setCookie('VISITED_COUNTRY', 'global', {domain: 'careers.blizzard.com'});

        cy.get('.ph-line-height-1_2 > font > span').scrollIntoView({duration:2000}).click();
        cy.get('[key-role="8uZ0jk-gdpr-cardListItemRole"] > .ph-media-cc-view1 > .ph-cc-d-m-b-0 > .link > .action-link > ppc-content').scrollIntoView({duration:2000});
        cy.get('a.au-target[href="https://careers.blizzard.com/global/en/job/R021581/Software-Testing-Engineer"]').click();
        cy.get('.bottom-jobaction > .btn > ppc-content').scrollIntoView({duration:2000});
    });

    it('Classes', () => {
        const cw = new ClassesWoW()
            cw.changePageSieze();
            cw.clickOnInfo();
            cw.clickOnClasses();
            cw.checkInClasses();
            cw.waitInClassesPage();
            cw.scrollToMonkClass();
            cw.clickOnMpnkClass();
            cw.checkInMonkClass();
            cw.waitInMonkClassPage();
            cw.scrollToNightElfRace();
            cw.clickOnNightElfRace();
            cw.checkInNightElfRace();
        })
    });

