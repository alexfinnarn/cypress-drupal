const excludedRules = {
  // These are totally arbitrary and based on whatever is on the home page at the time.
  // @todo Create a route to visit that has known content so we can target rules.
  'link-in-text-block': {enabled: false},
  'landmark-unique': {enabled: false},
  'page-has-heading-one': {enabled: false},
};
describe('Accessibility tests', {tags: "@a11y"}, function () {
  it('has no detectable a11y violations on an article', {tags: '@smoke', browser: 'electron'}, function () {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y({}, {rules: excludedRules}, terminalLog);
  });

  it('has no detectable a11y violations on an article', {browser: 'chrome'}, function () {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y({}, {rules: excludedRules}, terminalLog);
  });

  it('has no detectable a11y violations on an article', {browser: 'firefox'}, function () {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y({}, {rules: excludedRules}, terminalLog);
  });
});

function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({id, impact, description, nodes}) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  );

  cy.task('table', violationData);
}
