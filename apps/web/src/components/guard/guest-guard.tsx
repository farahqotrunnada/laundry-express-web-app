'use client';

import * as React from 'react';

import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';

const GuestGuard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { token } = useAuth();

  React.useEffect(() => {
    if (token) router.push('/');
  }, [token, router]);

  return <>{children}</>;
};

export default GuestGuard;
