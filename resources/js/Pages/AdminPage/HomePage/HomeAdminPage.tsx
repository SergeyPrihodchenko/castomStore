import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import HomeAdminPage from './ui/HomeAdminPage/HomeAdminPage';

export default function Dashboard({ auth }: PageProps) {
  return (
    <Container fixed>
      <Box minWidth={'390px'}>
        <AuthenticatedLayout user={auth.user}>
          <HomeAdminPage />
        </AuthenticatedLayout>
      </Box>
    </Container>
  );
}
