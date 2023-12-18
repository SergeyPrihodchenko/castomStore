import { useState, PropsWithChildren, ReactNode } from 'react';
import { User } from '@/types';
import Header from '@/Widgets/Header';
import Footer from '@/Widgets/Footer/Footer';

export default function MainLayout({
  user,
  header,
  children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
  const [] = useState(false);

  return (
      <>
        <Header />
          {children}
        <Footer />
      </>
  );
}
