import { useState, PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Shared/ui/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { User } from '@/types';
import Header from '@/Widgets/Header';
import Footer from '@/Widgets/Footer';

export default function Authenticated({
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
