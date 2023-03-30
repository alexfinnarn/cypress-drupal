describe('Using different viewports', function () {
  it('should show mobile menu when past mobile breapoint', function () {
    cy.viewport('macbook-16');
    cy.visit('/');
    cy.get('header button[data-drupal-selector="block-search-wide-button"]').should('be.visible');
    cy.viewport('iphone-6');
    cy.get('header button[data-drupal-selector="block-search-wide-button"]').should('not.be.visible');
  });
});
