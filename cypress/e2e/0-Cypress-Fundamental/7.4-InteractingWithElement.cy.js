/// <reference types="cypress" />

describe('browser actions', () => {
    beforeEach(() => {
        cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 });
      });
    it('should load books website', () => {
        // cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'index.html')
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    });

    it('should click on travel category', () => {
        cy.get('a').contains('Travel').click( { timeout: 10000 })
        cy.get('h1').should('have.text', 'Travel')
    });
});