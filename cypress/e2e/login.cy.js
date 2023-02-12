describe('Authentication tests', () => {
  it('Logs in as admin user', () => {
    cy.login('da_boss');
  })
})
