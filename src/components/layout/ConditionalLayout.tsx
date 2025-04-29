'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPath = pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPath && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!isAdminPath && <Footer />}
    </>
  );
}
