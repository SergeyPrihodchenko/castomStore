import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import HomeAdminPage from './ui/HomeAdminPage/HomeAdminPage';

export default function Dashboard({ auth }: PageProps) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <HomeAdminPage />
    </AuthenticatedLayout>
  );
}
