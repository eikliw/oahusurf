'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// This redirects to the official Sanity Studio for your project
export default function StudioRedirectClient() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the official Sanity Studio
    window.location.href = 'https://oahusurfco.sanity.studio/';
  }, []);
  
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '1rem',
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>Redirecting to Sanity Studio...</h1>
      <p>If you're not redirected automatically, please click the button below:</p>
      <a 
        href="https://oahusurfco.sanity.studio/" 
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#333',
          color: 'white',
          borderRadius: '0.375rem',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Go to Sanity Studio
      </a>
    </div>
  );
} 