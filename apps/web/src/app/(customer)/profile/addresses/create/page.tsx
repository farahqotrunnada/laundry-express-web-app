import * as React from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import AddressForm from '../_components/form';

interface PageProps {
  //
}

export default async function Page({ ...props }: PageProps): Promise<React.JSX.Element> {
  return (
    <Card x-chunk='dashboard-04-chunk-1'>
      <CardHeader>
        <CardTitle className='text-xl font-bold'>Add Address</CardTitle>
        <CardDescription>Manage your addresses, this information will be used to deliver your orders.</CardDescription>
      </CardHeader>
      <CardContent>
        <AddressForm />
      </CardContent>
    </Card>
  );
}
