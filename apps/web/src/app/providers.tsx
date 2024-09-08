'use client';

import * as React from 'react';

import { AuthProvider } from '@/context/AuthContext';
import { TooltipProvider } from '@/components/ui/tooltip';

interface LayoutProps extends React.PropsWithChildren {
  //
}

export default function Provider({ children }: LayoutProps) {
  return (
    <AuthProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </AuthProvider>
  );
}
