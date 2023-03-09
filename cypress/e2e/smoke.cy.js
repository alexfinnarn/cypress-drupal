describe('smoke test', () => {
  it('loads the home page and searches for content', () => {
    // Visit the home page, which has search on it.
    cy.visit('/');

    // Look for content that shows we loaded the page without errors.
    cy.contains('Congratulations and welcome to the Drupal community.');

    // Open the menu to get to the search input.
    cy.get('.mobile-nav-button').click();

    // Clear and type into the search input.
    cy.get('#edit-keys').clear().type('welcome{enter}');

    // Assert that the search results page loaded with no relevant results.
    cy.get('h3').should('have.text', 'Your search yielded no results.');
  })
})
