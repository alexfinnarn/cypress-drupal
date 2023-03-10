import {users} from "../support/users";

describe('Authentication tests - using a matrix', () => {
  const testUsers = [
    {
      name: 'da_boss',
      contentPageMessage: 'Content',
      siteInformationPageMessage: 'Basic site settings',
    },
    {
      name: 'editor',
      contentPageMessage: 'Content',
      siteInformationPageMessage: 'Access denied',
    },
    {
      name: 'a-failure',
      contentPageMessage: 'Access denied',
      siteInformationPageMessage: 'Access denied',
    }
  ];
  testUsers.forEach(user => {
    it(`Logs in as ${user.name}`, () => {
      // Log in as the user.
      cy.login(user.name, users[user.name].password);

      // Go visit a page that requires authentication.
      cy.visit('/admin/content', {failOnStatusCode: false});

      // Confirm the user sees the right message.
      cy.get('h1.page-title').contains(user.contentPageMessage);

      // Go visit a page that requires more authentication.
      cy.visit('/admin/config/system/site-information', {failOnStatusCode: false});

      // Confirm the user sees the right message.
      cy.get('h1.page-title').contains(user.siteInformationPageMessage);
    })
  })
})
