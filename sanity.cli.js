/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '8hae5kj0',
    dataset: 'production'
  },
  // Host for the deployed studio
  studioHost: 'oahusurfco',
  // Use JS config file
  configPath: './sanity.studio.js'
})
