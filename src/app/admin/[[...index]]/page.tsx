import AdminRedirectClient from '@/components/admin/AdminRedirectClient';

// Generate static params for the admin route
export function generateStaticParams() {
  // For the admin route, we only need to generate the root path
  return [{ index: [] }];
}

// Server component that renders the client redirect component
export default function AdminPage() {
  return <AdminRedirectClient />;
} 