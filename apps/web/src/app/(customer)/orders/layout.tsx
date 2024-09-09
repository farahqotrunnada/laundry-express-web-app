import * as React from 'react';

import SubmenuLayout from '@/layouts/submenu/submenu';

interface LayoutProps extends React.PropsWithChildren {
  //
}

export default async function Layout({ children }: LayoutProps): Promise<React.JSX.Element> {
  const links = [
    { title: 'Orders', href: '/orders' },
    { title: 'Ongoing Order', href: '/orders/ongoing' },
    { title: 'Completed Order', href: '/orders/completed' },
  ];

  return <SubmenuLayout links={links}>{children}</SubmenuLayout>;
}
