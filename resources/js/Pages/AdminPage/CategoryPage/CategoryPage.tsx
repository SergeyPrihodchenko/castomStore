import Categories from '@/Features/Admin/CategoriesPage/ui/Categories';
import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';


export default function CategoryPage({ auth, catalogs }: PageProps) {

  return (
    <MainLayout user={auth.user}>
      <Categories catalogs={catalogs}/>
    </MainLayout>
  );
}
