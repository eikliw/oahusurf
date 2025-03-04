import AdminClient from '@/components/admin/AdminClient';

// Generate static params for the admin route
export function generateStaticParams() {
  // For the admin route, we only need to generate the root path
  return [{ index: [] }];
}

// Server component that renders the client component
export default function AdminPage() {
  return <AdminClient />;
} 