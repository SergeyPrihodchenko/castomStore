import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Counter } from '@/entities/Counter';
import { PostDetail } from '@/entities/Post';
import { Modal } from '@/Shared/ui/Modal/Modal';
import { useState } from 'react';

export default function Dashboard({ auth }: PageProps) {
  const [isOpen, setIsOpen] = useState(false);
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
        Modal
      </Modal>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-red-100">
              You're logged in!
              <Counter />
              <PostDetail />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
