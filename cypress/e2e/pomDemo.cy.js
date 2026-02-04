
import { LoginPage } from "./Pages/login_page"

const loginPage = new LoginPage()
beforeEach(function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

describe('All Login Tests', function () {

    
    it('Login with valid credentials', function () {



        loginPage.enterUserName('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get(':nth-child(12) > .oxd-main-menu-item').click()

        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // cy.get('.oxd-button').click()

    })

    it('Login with invalid username', function () {

        //cy.visit('https://opensource-demo.orangehrmlive.com/')

        loginPage.enterUserName('Admin123')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get(':nth-child(12) > .oxd-main-menu-item').click()



    })

})
it('Login with invalid password', function () {

    //cy.visit('https://opensource-demo.orangehrmlive.com/')

    loginPage.enterUserName('Admin')
    loginPage.enterPassword('admin456')
    loginPage.clickLogin()
    cy.get(':nth-child(12) > .oxd-main-menu-item').click()



})
