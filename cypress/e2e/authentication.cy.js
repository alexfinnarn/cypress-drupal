import {users} from "../support/users";

describe('Authentication tests', () => {

  it('logs in without custom command', {tags: '@login'}, function () {
    cy.visit('/user/login');
    cy.get('#edit-name').type('da_boss');
    cy.get('#edit-pass').type(users.da_boss.password);
    cy.get('input[value="Log in"]').scrollIntoView().click();

    cy.visit('/admin/content');
    cy.get('h1.page-title').contains('Content');
  });

  it('Logs in as an administrator', () => {
    // Log in as an administrator.
    cy.login('da_boss', users.da_boss.password);

    // Go visit a page that requires authentication.
    cy.visit('/admin/content');

    // Confirm the page loads instead of 404.
    cy.get('h1.page-title').contains('Content');

    // Go visit a page that requires more authentication.
    cy.visit('/admin/config/system/site-information');

    // Confirm the page loads instead of 404.
    cy.get('h1.page-title').contains('Basic site settings');
  })

  it('Logs in as an editor', () => {
    // Log in as an editor.
    cy.login('editor', users.editor.password);

    // Go visit a page that requires authentication.
    cy.visit('/admin/content');

    // Confirm the page loads instead of 404.
    cy.get('h1.page-title').contains('Content');

    // Go visit a page that requires more authentication.
    cy.visit('/admin/config/system/site-information', {failOnStatusCode: false});

    // Confirm the page does not load.
    cy.get('h1.page-title').contains('Access denied');
  })

  it('Logs in as a failure', () => {
    // Log in as an editor.
    cy.login('a-failure', 'im-sorry');

    // Go visit a page that requires authentication.
    cy.visit('/admin/content', {failOnStatusCode: false});

    // Confirm the page loads instead of 404.
    cy.get('h1.page-title').contains('Access denied');

    // Go visit a page that requires more authentication.
    cy.visit('/admin/config/system/site-information', {failOnStatusCode: false});

    // Confirm the page does not load.
    cy.get('h1.page-title').contains('Access denied');
  })

  it.skip('should fail username', function () {

  });

  it.skip('should fail password', function () {

  });
})
