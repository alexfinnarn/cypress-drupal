describe('Accessibility tests', {tags: "@a11y"}, function () {
  it('has no detectable a11y violations on an article', {tags: '@smoke'},  function () {
    cy.visit('/');
    cy.get('h2.node__title').eq(0).click();
    cy.injectAxe();
    cy.checkA11y(
      {},
      {
        rules: {
          'heading-order': {enabled: false},
          'landmark-unique': {enabled: false},
        },
      }, terminalLog);
  });
});

function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )

  cy.task('table', violationData)
}
