'use client';

import * as React from 'react';

import { useAuth } from '@/hooks/use-auth';
import { useIsMounted } from 'usehooks-ts';
import { useRouter } from 'next/navigation';

const GuestGuard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const isMounted = useIsMounted();
  const { token } = useAuth();

  React.useEffect(() => {
    if (token) router.push('/');
  }, [token, router]);

  if (!isMounted) return null;
  return <>{children}</>;
};

export default GuestGuard;
