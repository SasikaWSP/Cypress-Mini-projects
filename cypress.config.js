const { defineConfig } = require('cypress');
//const cypress = require('cypress')
//const marge = require('mochawesome-report-generator')
//const { merge } = require('mochawesome-merge')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  //reporter: 'cypress-mochawesome-reporter',
  //reporterOptions: {
    //charts: true,
    //reportPageTitle: 'custom-title',
    //html: false,
    //JSON: true,
    //overwrite: false,
    //embeddedScreenshots: true,
    //inlineAssets: true,
    //aveAllAttempts: false,
    //reportDir: 'cypress/report',
    //mochaFile: 'my-test-output.xml'
  //},
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 4000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
      //require('cypress-mochawesome-reporter/plugin')(on);
      
      
    },
  },
});




