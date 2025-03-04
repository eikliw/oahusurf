/**
 * This is the main Sanity configuration file.
 * It's used for both local development and hosted studio.
 */

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'oahu-surf-studio',
  title: 'Oahu Surf Co Blog',
  
  // These must be explicitly set
  projectId: '8hae5kj0',
  dataset: 'production',
  
  plugins: [
    deskTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
