'use client';

import * as React from 'react';

import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

interface LayoutProps extends React.PropsWithChildren {
  //
}

export default function Provider({ children }: LayoutProps) {
  return (
    <AuthProvider>
      <TooltipProvider>
        {children}
        <Toaster />
      </TooltipProvider>
    </AuthProvider>
  );
}
