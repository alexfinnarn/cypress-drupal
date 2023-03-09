describe('Status codes test', () => {
  it('404 test', () => {
    // Visit a page that doesn't exist.
    // This helps with already having content that could interfere with the test.
    cy.visit('/nothing', {failOnStatusCode: false});

    // Look for content that shows we loaded the page without errors.
    cy.get('h1').should('have.text', 'Page not found');
    cy.contains('The requested page could not be found.');
  })

  it('403 test', () => {
    // Visit an admin page.
    cy.visit('/admin/config/system/site-information', {failOnStatusCode: false});

    // Look for content that shows we loaded the page without errors.
    cy.get('h1').should('have.text', 'Access denied');
    cy.contains('You are not authorized to access this page.');
  });
})
