'use client';

import { NextStudio } from 'next-sanity/studio';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

// Import the schema types
import authorSchema from '../../../schemas/author';
import categorySchema from '../../../schemas/category';
import postSchema from '../../../schemas/post';

// Client component that loads the Sanity Studio
export default function AdminClient() {
  // Create a properly configured Sanity Studio
  const config = defineConfig({
    name: 'default',
    title: 'Oahu Surf Co Blog',
    
    projectId: '8hae5kj0',
    dataset: 'production',
    
    basePath: '/admin',
    
    plugins: [
      deskTool(),
      visionTool(),
    ],
    
    schema: {
      types: [
        postSchema,
        authorSchema,
        categorySchema
      ],
    },
  });

  return <NextStudio config={config} />;
} 