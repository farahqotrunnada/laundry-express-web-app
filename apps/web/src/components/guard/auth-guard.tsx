'use client';

import * as React from 'react';

import Loader from '@/components/loader';
import { useAuth } from '@/hooks/use-auth';

type Role = 'Driver' | 'Customer' | 'Superadmin' | 'OutletAdmin' | 'WashingWorker' | 'IroningWorker' | 'PackingWorker';

interface AuthGuardProps extends React.PropsWithChildren {
  allowed: Role | Role[];
}

const AuthGuard: React.FC<AuthGuardProps> = ({ allowed, children }) => {
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
        if (!json.protected) window.location.href = '/';
      };

      verify();
      setLoading(false);
    } else window.location.href = '/auth/login';
  }, [token, allowed]);

  if (loading) return <Loader />;
  return <>{children}</>;
};

export default AuthGuard;
