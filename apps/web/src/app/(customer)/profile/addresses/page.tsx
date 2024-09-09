import * as React from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import AddressTable from './_components/table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface PageProps {
  //
}

export default async function Page({ ...props }: PageProps): Promise<React.JSX.Element> {
  return (
    <Card x-chunk='dashboard-04-chunk-1'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle className='text-xl font-bold'>User Addresses</CardTitle>
          <Link href='/profile/addresses/create' className='ml-auto'>
            <Button variant='outline'>Add Address</Button>
          </Link>
        </div>
        <CardDescription>Manage your addresses, this information will be used to deliver your orders.</CardDescription>
      </CardHeader>
      <CardContent>
        <AddressTable />
      </CardContent>
    </Card>
  );
}
