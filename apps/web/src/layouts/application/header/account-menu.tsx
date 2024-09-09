'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import UserAvatar from '@/components/user-avatar';
import { useAuth } from '@/hooks/use-auth';

interface AccountMenuProps {
  //
}

const AccountMenu: React.FC<AccountMenuProps> = ({ ...props }) => {
  const { user } = useAuth();

  return (
    <div className='flex justify-end w-full gap-4'>
      {user ? (
        <UserAvatar user={user} />
      ) : (
        <Link href='/auth/login'>
          <Button variant='outline'>Sign in</Button>
        </Link>
      )}

      <Link href='/dashboard' className='hidden md:block'>
        <Button>Dashboard</Button>
      </Link>
    </div>
  );
};

export default AccountMenu;
