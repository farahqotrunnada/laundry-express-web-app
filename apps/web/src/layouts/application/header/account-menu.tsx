import * as React from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface AccountMenuProps {
  //
}

const AccountMenu: React.FC<AccountMenuProps> = ({ ...props }) => {
  return (
    <div className='flex justify-end w-full gap-4'>
      <Button variant='ghost' className='hidden md:inline'>
        Book a demo
      </Button>

      <div className='border-r hidden md:inline'></div>

      <Link href='/login'>
        <Button variant='outline'>Sign in</Button>
      </Link>

      <Link href='/dashboard' className='hidden md:block'>
        <Button>Get started</Button>
      </Link>
    </div>
  );
};

export default AccountMenu;
