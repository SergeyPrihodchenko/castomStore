import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import s from './mainAdminPage.module.css';
import MainAdminPage from './ui/Main/MainAdminPage';

export default function Dashboard({ auth }: PageProps) {
  return (
    <div className={s.container}>
      <main className={s.mainPage}>
        <AuthenticatedLayout user={auth.user}>
          <MainAdminPage />
        </AuthenticatedLayout>
      </main>
    </div>
  );
}
