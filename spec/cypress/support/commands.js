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

Cypress.Commands.add('register', (email, password) => {
  cy.get('#link-to-login').click();

  cy.url().should('include', '/login');

  cy.contains('Create a new account').click();

  cy.get('[name="spree_user[email]"]').type(email);
  cy.get('[name="spree_user[password]"]').type(password);
  cy.get('[name="spree_user[password_confirmation]"]').type(password);


  cy.get('input.button')
    .contains('Create')
    .click();
});

Cypress.Commands.add('logout', (email, password) => {
  cy.get('#nav-bar')
    .contains('Logout')
    .click();
});
