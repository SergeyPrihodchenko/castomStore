import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Modal } from '@/Shared/ui/Modal/Modal';
import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { PostDetail } from '@/entities/Post';
import Counter from '@/entities/Counter/ui/Counter';

export default function Dashboard({ auth }: PageProps) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(auth);

  // {
  //   title: 'title',
  //   header: 'header',
  //   subheader: 'subheader',
  //   image: null,
  // }

  useEffect(() => {
    const res = axios.post(` /admin/dashboard/main`);
    // const res = axios.post(`admin/dashboard/showUser`);
    console.log(res);
  }, []);
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />
      <button onClick={() => setIsOpen(true)}>show modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Suspense fallback={<div>loading</div>}>
          <PostDetail />
        </Suspense>
      </Modal>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-red-100">
              <Counter />
              You're logged in!
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
