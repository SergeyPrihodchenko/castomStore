import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';
import Container from '@mui/material/Container';
import HomeAdminPage from './ui/HomeAdminPage/HomeAdminPage';

export default function Dashboard({ auth }: PageProps) {
  return (
    <Container fixed>
      <MainLayout user={auth.user}>
        <HomeAdminPage />
      </MainLayout>
    </Container>
  );
}
