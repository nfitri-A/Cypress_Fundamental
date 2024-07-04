const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wp2tpd',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
