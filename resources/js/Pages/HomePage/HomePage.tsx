import Header from '@/Widgets/Header';
import HomePage from './ui/HomePage';
import Footer from '@/Widgets/Footer';
import Box from '@mui/material/Box';
import Categories from '@/Features/Admin/CatalogsPanel/ui/Categories';
import CategoriesPage from '../AdminPage/Form/ui/CategoriesPage';
import Catalogs from '@/Features/Admin/CatalogsPanel/ui/Catalogs';

export default function Welcome() {
  return (
    <Box sx={{ minWidth: '390px' }}>
      <Header />
      <Catalogs/>
      <Footer />
    </Box>
  );
}
