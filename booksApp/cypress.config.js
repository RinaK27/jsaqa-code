const { defineConfig } = require('cypress');
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('..', 'config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

// plugins file
module.exports = (on, config) => {
  // accept a configFile value or use development by default
  const file = config.env.configFile || 'development'

  return getConfigurationByFile(file)
}
module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: 1,
  e2e: {
    
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'http://localhost:3000',
    
  },
})

