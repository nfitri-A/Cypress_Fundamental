/// <reference types="cypress" />
describe('My First Test', () => {
    it('clicking "type" show the right headings', () => {
        cy.visit('https://example.cypress.io')
        cy.pause()
        cy.contains('type').click()

     // should be on a new URL whick includes '/command/actions'
        cy.url().should('include','commands/actions')
    // get an input, type into it and verify tha the value has been updated
        cy.get('.action-email')
        .type('Ansori@gmail.com')
        .should('have.value', 'Ansori@gmail.com')
    });
});