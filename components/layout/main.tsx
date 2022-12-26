import React, { ReactElement } from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="m-auto flex h-screen max-w-5xl flex-col gap-24 pb-20 pt-10 dark:text-white">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
