Cypress.Commands.add('login', (email, password) => {
  cy.get('#link-to-login').click()

  cy.url().should('include', '/login')

  cy.get('[name="spree_user[email]"]')
    .type(email)
  cy.get('[name="spree_user[password]"]')
    .type(password)

  cy.get('input.button')
    .contains('Login')
    .click()
})
