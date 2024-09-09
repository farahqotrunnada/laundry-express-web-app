'use client';

import * as React from 'react';

import FullscreenLoader from '../loader/fullscreen';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';

type Role = 'Driver' | 'Customer' | 'Superadmin' | 'OutletAdmin' | 'WashingWorker' | 'IroningWorker' | 'PackingWorker';

interface AuthGuardProps extends React.PropsWithChildren {
  allowed: Role | Role[];
}

const AuthGuard: React.FC<AuthGuardProps> = ({ allowed, children }) => {
  const router = useRouter();
  const { token } = useAuth();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (token) {
      const verify = async () => {
        const res = await fetch('/api/auth/verify', {
          method: 'POST',
          body: JSON.stringify({ token, allowed }),
        });
        const json = await res.json();
        if (!json.protected) router.push('/');
      };

      verify();
      setLoading(false);
    } else window.location.href = '/auth/login';
  }, [token, allowed, router]);

  if (loading) return <FullscreenLoader />;
  return <>{children}</>;
};

export default AuthGuard;
