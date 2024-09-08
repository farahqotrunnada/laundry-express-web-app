'use client';

import * as React from 'react';

import FullscreenLoader from '../loader/fullscreen';
import { useAuth } from '@/hooks/use-auth';

const GuestGuard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { token } = useAuth();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (token) {
      window.location.href = '/';
      setLoading(false);
    }
  }, [token]);

  if (loading) return <FullscreenLoader />;
  return <>{children}</>;
};

export default GuestGuard;
