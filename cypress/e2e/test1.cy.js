/// <reference types = "cypress"/>

it('Google search',() => {
    cy.visit('https://google.com/')

    cy.get('#APjFqb').type('Automation step by step{Enter}')
    //cy.contains('Google Search').click()
    cy.wait(5000)
    cy.contains('Videos').click();
    cy.contains('Selenium Beginner Tutorial 1 ').click()
})