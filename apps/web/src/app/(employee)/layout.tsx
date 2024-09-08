import * as React from 'react';

import DashboardLayout from '@/layouts/dashboard/dashboard';

interface LayoutProps extends React.PropsWithChildren {
  //
}

export default async function Layout({ children }: LayoutProps): Promise<React.JSX.Element> {
  return <DashboardLayout>{children}</DashboardLayout>;
}
