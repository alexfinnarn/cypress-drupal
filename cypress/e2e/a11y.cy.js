describe('Accessibility tests', {tags: "@a11y"}, function () {
  it('has no detectable a11y violations on homepage', {tags: '@smoke'},  function () {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y();
  });
});
