import * as React from 'react';

import SubmenuLayout from '@/layouts/submenu/submenu';

interface LayoutProps extends React.PropsWithChildren {
  //
}

export default async function Layout({ children }: LayoutProps): Promise<React.JSX.Element> {
  const links = [
    { title: 'Profile', href: '/profile' },
    { title: 'Adderess', href: '/profile/addresses' },
  ];

  return <SubmenuLayout links={links}>{children}</SubmenuLayout>;
}
