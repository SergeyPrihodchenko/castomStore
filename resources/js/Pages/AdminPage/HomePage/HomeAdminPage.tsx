import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';
import HomeAdminPage from './ui/HomeAdminPage/HomeAdminPage';

export default function Dashboard({ auth }: PageProps) {
  return (
    <MainLayout user={auth.user}>
      <HomeAdminPage />
    </MainLayout>
  );
}
