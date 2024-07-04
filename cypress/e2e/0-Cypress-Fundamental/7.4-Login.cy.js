/// <reference types="cypress" />

describe('Login with inputs', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 });
      });
    it('failed login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username').should('have.value', 'username')
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password').should('have.value', 'password')
        cy.get('[type="checkbox"]').check()
        cy.get('.btn-primary').click()
        // cy.get('.alert-error').should('contain', 'Login and/or password are wrong.')
        cy.get('a').should('contain', 'Account Summary')
    });

    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });

    it('enable the checkbox of the keep me signed in feature', () => {
        cy.get('[type="checkbox"]').check()
        
    });

    it('should try to login', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            // cy.get('#user_login').clear()
            // cy.get('#user_login').type(username)
            
            // cy.get('input[name="user_password"]').clear()
            // cy.get('input[name="user_password"]').type(password)

            // cy.get('input[name="submit"]').click()

            // login use commands.js
            cy.login(username, password) //username dan password harus sama dengan ketikan username dan password yang berada di cons
            cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
            
        });
    });
});