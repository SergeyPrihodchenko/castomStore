import Header from '@/Widgets/Header';
import HomePage from './ui/HomePage';
import Footer from '@/Widgets/Footer';
import Subscription from '@/Widgets/Subscription';
import Box from '@mui/material/Box';
import Categories from '@/Features/Admin/CatalogsPanel/ui/Categories';
import Catalogs from '@/Features/Admin/CatalogsPanel/ui/Catalogs';
import AddProduct from '@/Features/Admin/AddProduct/ui/AddProduct';
import ProductTable from '../AdminPage/Form/ui/ProductsTable';
import AdminProductList from '../AdminPage/ProductList/ui/AdminProductList';

export default function Welcome() {
  return (
    <Box sx={{ minWidth: '320px' }}>
      <Header />
      {/* <Catalogs/>  подключал для тестирования */}
      <AddProduct />
      {/* <ProductTable /> */}
      {/* <HomePage /> */}
      {/* <Subscription /> */}
      <AdminProductList />
      <Footer />
    </Box>
  );
}
