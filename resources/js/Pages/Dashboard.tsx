import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useEffect } from 'react';
import axios from 'axios';
import AddSettingsForm from '@/Features/Admin/AddMainPageSettings';

export default function Dashboard({ auth }: PageProps) {
  // useEffect(() => {
  //   const res = axios.post(` /admin/dashboard/main`);
  //   console.log(res);
  // }, []);
  return (
    <MainLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-red-100">
              <AddSettingsForm />
              You're logged in!
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
