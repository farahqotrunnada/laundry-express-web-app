'use client';

import * as React from 'react';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

const GuestGuard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { token } = useAuth();

  React.useEffect(() => {
    if (token) router.push('/dashboard');
  }, [token, router]);

  if (token) return null;
  return <>{children}</>;
};

export default GuestGuard;
