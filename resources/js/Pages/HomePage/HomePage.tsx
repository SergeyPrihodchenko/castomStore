import Header from '@/Widgets/Header';
import HomePage from './ui/HomePage';
import Footer from '@/Widgets/Footer';
import Subscription from '@/Widgets/Subscription';
import Categories from '@/Features/Admin/CatalogsPanel/ui/Categories';
import Catalogs from '@/Features/Admin/CatalogsPanel/ui/Catalogs';

//import AddProduct from '@/Features/Admin/AddProduct/ui/AddProduct';
import AuthenticationTwoFactor from '../AdminPage/Form/AuthenticationTwoFactor';
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
      <AuthenticationTwoFactor />
      <HomePage />
      <Subscription />
      {/* <AdminProductList /> */}
      <Footer />
    </>
  );
}
