import Header from '@/Widgets/Header';
import MainPage from './ui/MainHomePage';
import Footer from '@/Widgets/Footer';
import Box from '@mui/material/Box';

export default function Welcome() {
  return (
    <Box
      sx={{
        maxWidth: '390px',
      }}
    >
      <Header />
      <MainPage />
      <Footer />
    </Box>
  );
}
