# Drupal and Cypress Examples

This project has some examples that you can use to get started with Drupal and Cypress. It is based off of a stock
install of Drupal 10 and will add examples as they are developed.

There are two main parts of this codebase:
- /web - Drupal 10 codebase with `composer create drupal/recommended-project`
- /cypress - Cypress tests, commands, and plugin integrations

## Drupal 10  Codebase

The Drupal 10 install is as basic as possible and what you get with the standard install profile. Right now, it is
intentionally sparse in order to not be all that different than what you'll see on a stock install. As we add
examples, we might switch to installing from config and adding contrib modules.

The codebase also uses DDEV which you will have to install yourself: https://ddev.readthedocs.io/en/stable/

Then you can run:

```bash
# Install dependencies and create the Drupal site in /drupal.
./scripts/setup.sh
```

Now you have a fresh Drupal 10 site with the standard install profile in the `/drupal` directory. The baseURL is set
in `cypress.config.js` and is `http://drupal.ddev.site`.

## Cypress

The Cypress tests follow the standard directory structure with the addition of a proposed way to organize your
end-to-end tests.

```bash
# Install dependencies
yarn

# Run Cypress tests.
yarn cy:run

# Open Cypress GUI test runner.
yarn cy:open
```

## Cypress Examples/Plugins used

At the heart of this repo are examples you can use to quickly scaffold a Cypress test suite for your Drupal site
using best practices and common plugins. The examples are based on the Cypress documentation and the Cypress community.

Resources:
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices.html)
- [Cypress Plugins](https://docs.cypress.io/plugins/)
- [Cypress Discord Server](...)

### Cypress Plugins

- [cypress-real-events](https://github.com/dmtrKovalenko/cypress-real-events) - Simulate real user events instead of Cypress faking them
- [cypress-split](https://github.com/bahmutov/cypress-split) - Split tests into groups for parallelization on CI servers.
- [cypress-axe](https://github.com/component-driven/cypress-axe) - Run accessibility tests using axe-core.
- [@cypress-audit/lighthouse](https://mfrachet.github.io/cypress-audit/guides/lighthouse/installation.html) - Run Lighthouse audits on your site.
- [cypress-grep](https://github.com/cypress-io/cypress-grep) - Run a subset of tests based on a tags and filters.

### Cypress Examples

- [viewport](cypress/e2e/viewports.cy.js) - Set the viewport size for your tests.
- [accessibility](cypress/e2e/a11y.cy.js) - Run accessibility tests using axe-core.
- [lighthouse](cypress/e2e/lighthouse.cy.js) - Run Lighthouse audits on your site.
- [authentication](cypress/e2e/authentication.cy.js) - Authenticate a user using the Drupal login form.
- [authentication matrix](cypress/e2e/authentication-matrix.cy.js) - Use data to dynamically create authentication
  tests.
- [http codes](cypress/e2e/http-codes.cy.js) - Basic tests for common HTTP codes.

