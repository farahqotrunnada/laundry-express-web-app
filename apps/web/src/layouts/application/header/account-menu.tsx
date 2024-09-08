'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';

interface AccountMenuProps {
  //
}

const AccountMenu: React.FC<AccountMenuProps> = ({ ...props }) => {
  const { user, signout } = useAuth();

  return (
    <div className='flex justify-end w-full gap-4'>
      {user && (
        <>
          <Button variant='ghost' className='hidden md:inline'>
            {user.fullname}
          </Button>
          <div className='border-r hidden md:inline'></div>
        </>
      )}

      {user ? (
        <Button variant='outline' onClick={() => signout()}>
          Sign out
        </Button>
      ) : (
        <Link href='/auth/login'>
          <Button variant='outline'>Sign in</Button>
        </Link>
      )}

      <Link href='/dashboard' className='hidden md:block'>
        <Button>Get started</Button>
      </Link>
    </div>
  );
};

export default AccountMenu;
