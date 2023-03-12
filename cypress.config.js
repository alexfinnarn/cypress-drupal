const {defineConfig} = require("cypress");
const cypressSplit = require('cypress-split');

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
      cypressSplit(on, config);
      require('@cypress/grep/src/plugin')(config);
      // IMPORTANT: return the config object
      return config;
    },
  },
});
