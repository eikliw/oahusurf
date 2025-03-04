'use client';

// This is a special layout that doesn't include the site header/footer
// It's used only for the Sanity Studio route
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
} 