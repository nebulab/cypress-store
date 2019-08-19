describe('Sign in', () => {
  beforeEach(() => {
    cy.scenario('sign_in');
    cy.visit('/');
  });

  it('signs in user with valid credentials', () => {
    cy.get('#link-to-login').click();

    cy.url().should('include', '/login');

    cy.get('[name="spree_user[email]"]').type('user@example.com');
    cy.get('[name="spree_user[password]"]').type('test123');

    cy.get('input.button')
      .contains('Login')
      .click();

    cy.get('.flash.success')
      .contains('Logged in')
      .should('be.visible');
  });

  it('does not sign in user with invalid credentials', () => {
    cy.get('#link-to-login').click();

    cy.url().should('include', '/login');

    cy.get('[name="spree_user[email]"]').type('wrong_email@example.com');
    cy.get('[name="spree_user[password]"]').type('test123');

    cy.get('input.button')
      .contains('Login')
      .click();

    cy.get('.flash.error')
      .contains('Invalid email or password.')
      .should('be.visible');
  });
});
