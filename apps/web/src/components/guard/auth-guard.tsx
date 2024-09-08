'use client';

import * as React from 'react';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

type Role = 'Driver' | 'Customer' | 'Superadmin' | 'OutletAdmin' | 'WashingWorker' | 'IroningWorker' | 'PackingWorker';

interface AuthGuardProps extends React.PropsWithChildren {
  allowed: Role | Role[];
}

const AuthGuard: React.FC<AuthGuardProps> = ({ allowed, children }) => {
  const router = useRouter();
  const { token, signout } = useAuth();

  React.useEffect(() => {
    if (!token) return router.push('/login');

    const verify = async () => {
      const response = await fetch('/api/auth/verify', {
        method: 'POST',
        body: JSON.stringify({ token, allowed }),
      });

      if (response.status === 401) signout();
    };

    verify();
  }, [token, allowed, router, signout]);

  if (!token) return null;
  return <>{children}</>;
};

export default AuthGuard;
