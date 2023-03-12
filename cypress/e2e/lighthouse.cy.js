describe('Lighthouse tests', function () {
  it('should load the homepage quickly', {tags: '@smoke'} , function () {
    cy.visit('/');
    cy.lighthouse({
      performance: 85,
      accessibility: 100,
      "best-practices": 85,
      seo: 85,
      pwa: 100,
    });
  });
});
