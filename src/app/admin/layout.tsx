'use client';

// This is a special layout that doesn't include the site header/footer
// It's used only for the Sanity Admin route
export default function AdminLayout({
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