import * as React from 'react';

import Footer from '@/layouts/application/footer';
import Header from '@/layouts/application/header/header';
import { NavigationItem } from '@/types/navigation';

interface ApplicationProps extends React.PropsWithChildren {
  //
}

export default async function Application({ children }: ApplicationProps): Promise<React.JSX.Element> {
  const menus: NavigationItem[] = [
    {
      title: 'Product',
      description: 'Managing a small business today is already tough.',
      items: [
        {
          title: 'Reports',
          href: '/reports',
          description: 'Overview of all reports',
        },
        { title: 'Statistics', href: '/statistics', description: 'Reports on the performance of the business' },
        {
          title: 'Dashboards',
          href: '/dashboards',
          description: 'Dashboards to monitor the performance of the business',
        },
        {
          title: 'Recordings',
          href: '/recordings',
          description: 'Recordings of all the business activities',
        },
      ],
    },
    {
      title: 'Company',
      description: 'Managing a small business today is already tough.',
      items: [
        { title: 'About us', href: '/about' },
        { title: 'Fundraising', href: '/fundraising' },
        { title: 'Investors', href: '/investors' },
        { title: 'Contact us', href: '/contact' },
      ],
    },
  ];

  return (
    <>
      <Header menus={menus} />
      <main className='container min-h-screen py-10'>{children}</main>
      <Footer menus={menus} />
    </>
  );
}
