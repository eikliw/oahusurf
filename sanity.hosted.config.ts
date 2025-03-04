import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

// This configuration is specifically for the hosted Sanity Studio
export default defineConfig({
  name: 'oahusurfco-studio',
  title: 'Oahu Surf Co Blog',
  
  // The projectId MUST be included here
  projectId: '8hae5kj0',
  dataset: 'production',
  
  // Important: DON'T include a basePath for hosted studios
  
  plugins: [
    deskTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
}); 