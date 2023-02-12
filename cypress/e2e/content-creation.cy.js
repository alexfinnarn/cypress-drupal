describe('Content creation tests', () => {
  it('Creates a new post', () => {
    cy.login('da_boss');
    cy.visit('/admin/content');
    cy.get('main a[href="/node/add"]').click();
    cy.get('main a[href="/node/add/article"]').contains('Article').click();
    cy.get('#edit-title-0-value').type('New Article');
    cy.get('div[aria-label="Editor editing area: main"]').type('stuff');
    cy.get('#edit-field-tags-target-id').type('foo{enter}');
    cy.get('#edit-submit').click();
    cy.get('.title').contains( 'New Article');
    cy.get('.text-content').contains('Foop!');
  })
});
