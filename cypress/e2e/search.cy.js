describe('Search tests', () => {

  it('Uses mobile search', () => {
    // Visit the home page.
    cy.visit('/');

    // Open the menu to get to the search input.
    cy.get('.mobile-nav-button').click();

    // Clear and type into the search input.
    cy.get('#edit-keys').clear().type('welcome{enter}');

    // Assert that the search results page loaded with no relevant results.
    cy.get('h1.page-title').contains('Search for welcome');
    cy.get('main h3').should('have.text', 'Your search yielded no results.');
  });

  it.skip('Using advanced search to filter', () => {
    // Visit the search page.
    cy.visit('/search/node/cypress');

    // Confirm the page loads instead of 404.
    cy.get('h1.page-title').contains('Search');

    // Confirm the search results are on the page.
    cy.get('h2.search-result__title').contains('Cypress');
  });
});
