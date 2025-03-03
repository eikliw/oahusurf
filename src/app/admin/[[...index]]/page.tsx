'use client';

import { NextStudio } from 'next-sanity/studio';
import { useState, useEffect } from 'react';
import { defineConfig } from 'sanity';

// We can't import the config directly as it's outside the src directory
// Instead, we'll dynamically import it at runtime
export default function AdminPage() {
  // Using dynamic import to load the config at runtime
  const [config, setConfig] = useState<ReturnType<typeof defineConfig> | null>(null);

  useEffect(() => {
    import('../../../../studio/sanity.config').then((module) => {
      setConfig(module.default);
    }).catch(error => {
      console.error('Failed to load Sanity config:', error);
    });
  }, []);

  // Show loading state until config is loaded
  if (!config) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Loading Sanity Studio...</p>
      </div>
    );
  }

  return <NextStudio config={config} />;
} 