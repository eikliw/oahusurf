'use client';

import { NextStudio } from 'next-sanity/studio';
import { useState, useEffect } from 'react';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

// Client component that loads the Sanity Studio
export default function AdminClient() {
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

  return <NextStudio config={config} />;
} 