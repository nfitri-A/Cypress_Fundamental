/// <reference types="cypress" />

describe('Login with inputs', () => {
    // beforeEach(() => {
        // cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 });
      // });
    it('login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.get('#pay_bills_tab').contains('Pay Bills').click( {timeout: 10000 })
            cy.get('a').contains('Pay Saved Payee').click({ timeout : 10000})
            cy.get('select[id="sp_payee"]').select('Apple').should('have.value', 'apple')
            cy.get('select[id="sp_account"]').select('Checking').should('have.value', '2')
            cy.get('#sp_amount').type('1000').should('have.value', '1000')
            cy.get("#sp_date").click();
            cy.contains("[data-handler='selectDay'] a", "25").click();
            cy.get('input[name="description"]').type('pembayaran cash').should('have.value', 'pembayaran cash')
            cy.get('#pay_saved_payees').click()
            cy.get('#alert_content').should('contain.text', 'The payment was successfully submitted.')
            })
         
              
            });
        });
    
  // it('go to the paybills menu', () => {
  //   cy.visit('http://zero.webappsecurity.com/index.html')
  //   cy.get('#onlineBankingMenu').contains('Online Banking').click({ timeout: 10000})   
  //   cy.get('#pay_bills_link').contains('Pay Bills').click({ timeout: 10000})

  


