describe('Sign up', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('signs up user with valid credentials', () => {
    cy.register('user@example.com', 'test123');

    cy.get('.flash.notice')
      .contains('Welcome! You have signed up successfully.')
      .should('be.visible');

    cy.logout();

    cy.get('.flash.notice')
      .contains('Signed out successfully.')
      .should('be.visible');
  });

  it('flashes error message when email already taken', () => {
    cy.scenario('sign_in');

    cy.register('user@example.com', 'some_password');

    cy.get('.errorExplanation')
      .contains('Email has already been taken')
      .should('be.visible');
  });
});
