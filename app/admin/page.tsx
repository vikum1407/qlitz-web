export const metadata = {
  title: 'Admin — Qlitz',
  robots: { index: false, follow: false },
};

import { AdminDashboard } from './AdminDashboard';

export default function AdminPage() {
  return <AdminDashboard />;
}
