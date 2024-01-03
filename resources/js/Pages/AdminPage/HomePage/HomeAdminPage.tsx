import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';
import HomeAdminPageAccordion from './ui/HomeAdminPage/HomeAdminPageAccordion';
import HomeAdminPage from './ui/HomeAdminPage/HomeAdminPage';
import Box from '@mui/material/Box';

export default function Dashboard({ auth }: PageProps) {
  return (
    <MainLayout user={auth.user}>
      <Box
        sx={{
          opacity: { xs: '1', sm: '1', md: '0' },
          marginLeft: { xs: '0', sm: '0', md: '999px' },
        }}
      >
        <HomeAdminPageAccordion />
      </Box>
      <Box
        sx={{
          opacity: { xs: '0', sm: '0', md: '1' },
          marginTop: { xs: '0', sm: '0', md: '-300px' },
        }}
      >
        <HomeAdminPage />
      </Box>
    </MainLayout>
  );
}
