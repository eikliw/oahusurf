/**
 * This configuration is used specifically for the hosted Sanity Studio at oahusurfco.sanity.studio
 */

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'oahu-surf-studio',
  title: 'Oahu Surf Co Blog',
  
  // IMPORTANT: Project ID must be included
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