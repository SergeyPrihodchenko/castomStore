import Header from '@/Widgets/Header';
import HomePage from './ui/HomePage';
import Footer from '@/Widgets/Footer';
import Box from '@mui/material/Box';

export default function Welcome() {
  return (
    <Box sx={{ width: '320px' }}>
      <Header />
      <HomePage />
      <Footer />
    </Box>
  );
}
