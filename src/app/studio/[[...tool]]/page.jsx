/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Generate static params for the studio route
export function generateStaticParams() {
  // For the studio route, we only need to generate the root path
  return [{ tool: [] }];
}

// This redirects to the official Sanity Studio for your project
export default function StudioRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the official Sanity Studio
    window.location.href = 'https://8hae5kj0.sanity.studio/';
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
        href="https://8hae5kj0.sanity.studio/" 
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
