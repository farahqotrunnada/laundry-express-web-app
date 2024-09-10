import * as React from 'react';

import Feature from '@/components/landing/feature';
import { Hero } from '@/components/landing/hero';

interface PageProps {
  //
}

export default async function Page({ ...props }: PageProps): Promise<React.JSX.Element> {
  return (
    <div className='flex flex-col w-full gap-20 py-20'>
      <Hero />
      <Feature />
    </div>
  );
}
