import Header from '@/Widgets/Header';
import HomePage from './ui/HomePage';
import Footer from '@/Widgets/Footer/Footer';

import Categories from '@/Features/Admin/CategoriesAccordion/ui/Categories';
import Catalogs from '@/Features/Admin/CatalogsAccordion/ui/Catalogs';

//import AddProduct from '@/Features/Admin/AddProduct/ui/AddProduct';
import AuthenticationTwoFactor from '../../Features/Admin/AthenticationForm/AuthenticationTwoFactor';
import ProductTable from '../AdminPage/Form/ui/ProductsTable';
import AdminProductList from '../AdminPage/ProductList/ui/AdminProductList';
import AddProduct from '@/Features/Admin/AddProduct/ui/addProduct';

export default function Welcome() {
  return (
    <>
      <Header />
      {/* <Catalogs/>  подключал для тестирования */}
      {/* <AddProduct /> */}
      {/* <ProductTable /> */}
      {/* <AuthenticationTwoFactor /> */}
      <HomePage />
      {/* <AdminProductList /> */}
      <Footer />
    </>
  );
}
