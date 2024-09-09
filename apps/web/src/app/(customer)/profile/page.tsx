import * as React from 'react';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import ProfileForm from './_components/form';

interface PageProps {
  //
}

export default async function Page({ ...props }: PageProps): Promise<React.JSX.Element> {
  return (
    <>
      <Card x-chunk='dashboard-04-chunk-1'>
        <CardHeader>
          <CardTitle>Store Name</CardTitle>
          <CardDescription>Used to identify your store in the marketplace.</CardDescription>
        </CardHeader>
        <ProfileForm />
      </Card>
    </>
  );
}
