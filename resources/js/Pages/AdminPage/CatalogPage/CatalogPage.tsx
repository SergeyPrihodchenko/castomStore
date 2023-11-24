import Catalogs from '@/Features/Admin/CatalolgPage/ui/Catalogs';
import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';

export default function CatalogPage({ auth, catalogs }: PageProps) {
  console.log(catalogs);
  
  return (
    <MainLayout user={auth.user}>
        <Catalogs catalogs={catalogs}/>
    </MainLayout>
  );
}
