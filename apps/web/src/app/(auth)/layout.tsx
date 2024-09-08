import * as React from 'react';

import AuthLayout from '@/layouts/auth/auth';

interface LayoutProps extends React.PropsWithChildren {
  //
}

export default async function Layout({ children }: LayoutProps): Promise<React.JSX.Element> {
  return <AuthLayout>{children}</AuthLayout>;
}
