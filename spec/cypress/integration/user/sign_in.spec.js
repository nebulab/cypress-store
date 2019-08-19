describe('Sign in', () => {
  beforeEach(() => {
    cy.scenario('sign_in');
    cy.visit('/');
  });

  it('signs in user with valid credentials', () => {
    cy.login('user@example.com', 'test123');

    cy.get('.flash.success')
      .contains('Logged in')
      .should('be.visible');
  });

  it('does not sign in user with invalid credentials', () => {
    cy.login('wrong_email@example.com', 'test123');

    cy.get('.flash.error')
      .contains('Invalid email or password.')
      .should('be.visible');
  });
});
