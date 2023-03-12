const {defineConfig} = require("cypress");
const cypressSplit = require('cypress-split');
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

module.exports = defineConfig({
  env: {
    grepFilterSpecs: true
  },
  e2e: {
    baseUrl: "http://deets.ddev.site",
    experimentalStudio: true,
    drupalUsers: [
      'editor',
      'administrator'
    ],
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
      });

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

      cypressSplit(on, config);
      require('@cypress/grep/src/plugin')(config);
      // IMPORTANT: return the config object
      return config;
    },
  },
});
