import { useState, PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Shared/ui/ApplicationLogo';
import Dropdown from '@/Shared/ui/Dropdown';
import NavLink from '@/Shared/ui/NavLink';
import ResponsiveNavLink from '@/Shared/ui/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { User } from '@/types';
import Header from '@/Widgets/Header';
import Footer from '@/Widgets/Footer/Footer';
import ProductList from '@/Pages/AdminPage/ProductList/ui/ProductList';

export default function MainLayout({
  user,
  header,
  children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
  const [] = useState(false);

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
