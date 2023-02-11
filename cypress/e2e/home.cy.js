describe('smoke test', () => {
  it('loads the home page', () => {
    cy.visit('/');
    cy.contains('Congratulations and welcome to the Drupal community.');
  })
})
