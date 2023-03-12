import {users} from "../support/users";

describe('Content creation tests', { tags: '@content' }, () => {

  it('Creates a new post', { tags: '@smoke' }, () => {
    // Login as a content editor.
    cy.login('editor', users.editor.password);

    // Visit the content overview page to create a new article.
    cy.visit('/admin/content');

    // Click the "Add content" button.
    cy.get('main a[href="/node/add"]').click();

    // Click the "Article" button.
    cy.get('main a[href="/node/add/article"]').contains('Article').click();

    // Fill out the title field.
    cy.get('#edit-title-0-value').type('New Article');

    // Upload an image.
    cy.get('#edit-field-image-0-upload').selectFile('cypress/images/beehat-drupalicon-small.png');
    cy.get('input[name="field_image[0][alt]"]').type('Beehat Druplicon');

    // Fill out the body field.
    cy.get('div[aria-label="Editor editing area: main"]').click();
    cy.realType('Bob{enter}McDougle{enter}');
    cy.get('button[data-cke-tooltip-text="Bulleted List"]').realClick();
    cy.realType('Milk{enter}Eggs{enter}Bread{enter}{enter}');
    cy.get('button[data-cke-tooltip-text="Block quote"]').realClick();
    cy.realType('It\'s today, not yesterday!');

    // Add tags to the article.
    cy.get('#edit-field-tags-target-id').type('foo,bar{enter}');

    // Save the article node.
    cy.get('#edit-submit').click();

    // Confirm the article was created with the right title, body, image, and tags.
    cy.get('.title').contains( 'New Article');
    cy.get('img[alt="Beehat Druplicon"]').should('be.visible');
    cy.get('.text-content.field--name-body').should('have.html',
      `<p>Bob</p><p>McDougle</p><ul><li>Milk</li><li>Eggs</li><li>Bread</li></ul><blockquote><p>It's today, not yesterday!</p></blockquote>`);
    cy.get('.field--name-field-tags a').eq(0).contains('foo');
    cy.get('.field--name-field-tags a').eq(1).contains('bar');
  })
});
