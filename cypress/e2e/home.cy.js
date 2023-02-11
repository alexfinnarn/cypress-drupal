describe('smoke test', () => {
  it('loads the home page', () => {
    cy.visit('/');
    cy.contains('Congratulations and welcome to the Drupal community.');
    cy.get('.mobile-nav-button').click();
    cy.get('#edit-keys').clear();
    cy.get('#edit-keys').type('welcome{enter}');
    cy.get('#edit-submit').click();
    cy.get('h3').click();
    cy.get('h3').should('have.text', 'Your search yielded no results.');
  })
})
