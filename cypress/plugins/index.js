/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// const { lighthouse, prepareAudit } = require('cypress-audit');

/**
 * @type {Cypress.PluginConfig}
 */
// module.exports = (on, config) => {
//   on('before:browser:launch', (browser = {}, launchOptions) => {
//
//     /**
//      * Reduces the amount of errors we get for any external connections.
//      */
//     if (browser.name === 'chrome') {
//       launchOptions.args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
//     }
//
//     /**
//      * Sets up cypress-audit.
//      * @see https://github.com/mfrachet/cypress-audit
//      */
//     prepareAudit(launchOptions);
//
//     return launchOptions;
//   });
//
//   on('task', {
//     lighthouse: lighthouse(),
//   });
// };

// Creates two tasks for logging messages.
// Used for outputting the results of the accessibility audit.
module.exports = (on, config) => {
  on('task', {
    log(message) {
      console.log(message);

      return null;
    },
    table(message) {
      console.table(message);

      return null;
    }
  });
};
