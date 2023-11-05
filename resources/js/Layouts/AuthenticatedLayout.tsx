import { useState, PropsWithChildren, ReactNode } from 'react';
import { User } from '@/types';
import HeaderAdminPage from '@/Pages/Admin/Main/ui/Header/HeaderAdminPage';

export default function Authenticated({
  user,
  header,
  children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
  const [] = useState(false);

  return (
    <div>
      <HeaderAdminPage />
      <main>{children}</main>
    </div>
  );
}
