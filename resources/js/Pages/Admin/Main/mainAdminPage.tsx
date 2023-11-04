import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Counter } from '@/entities/Counter';
import { PostDetail } from '@/entities/Post';
import * as React from 'react';

import s from './mainAdminPage.module.css';
import MainAdminPage from './ui/Main/MainAdminPage';
import HeaderAdminPage from './ui/Header/HeaderAdminPage';

export default function Dashboard({ auth }: PageProps) {
  return (
    <div className={s.container}>
      <main className={s.mainAdminPage}>
        <AuthenticatedLayout
          user={auth.user}
          // header={
          //   <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          //     Настройки вашего магазина
          //   </h2>
          // }
        >
          {/* <Head title="Settings" />
          <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900 dark:text-red-100">
                  You're logged in!
                  <Counter />
                  <PostDetail />
                  <aside className={s.aside}>ASIDE</aside>
                </div>
              </div>
            </div>
          </div> */}
          <HeaderAdminPage />
          <MainAdminPage />
        </AuthenticatedLayout>
      </main>
    </div>
  );
}
