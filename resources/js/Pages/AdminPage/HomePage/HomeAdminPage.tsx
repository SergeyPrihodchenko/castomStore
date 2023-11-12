import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import Container from '@mui/material/Container';

import HomeAdminPage from './ui/HomeAdminPage/HomeAdminPage';

export default function Dashboard({ auth }: PageProps) {
  return (
    <Container fixed>
      <AuthenticatedLayout user={auth.user}>
        <HomeAdminPage />
      </AuthenticatedLayout>
    </Container>
  );
}
