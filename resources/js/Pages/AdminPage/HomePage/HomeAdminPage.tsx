import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';
import HomeAdminPage from './ui/HomeAdminPage/HomeAdminPage';

export default function Dashboard({ auth }: PageProps) {
  return (

    <Container fixed>
      <MainLayout user={auth.user}>
         </AuthenticatedLayout>
        <HomeAdminPage />
      </MainLayout>
    </Container>

  );
}
