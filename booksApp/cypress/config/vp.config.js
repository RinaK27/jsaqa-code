const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
    viewportWidth: 2532,
    viewportHeight: 1170,
  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },
});
