'use client';

import { NextStudio } from 'next-sanity/studio';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

export default function StudioClient() {
  // Create a simple config directly in the component
  const config = defineConfig({
    name: 'default',
    title: 'Oahu Surf Co Blog',
    
    projectId: '8hae5kj0',
    dataset: 'production',
    
    plugins: [
      deskTool(),
      visionTool(),
    ],
    
    schema: {
      types: [],
    },
  });

  return (
    <div style={{ height: '100vh' }}>
      <NextStudio config={config} />
    </div>
  );
} 