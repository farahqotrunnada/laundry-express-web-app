'use client';

import * as React from 'react';

import Link from 'next/link';
import { NavigationLink } from '@/types/navigation';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

interface LayoutProps extends React.PropsWithChildren {
  links: NavigationLink[];
}

const SubmenuLayout: React.FC<LayoutProps> = ({ children, links = [] }) => {
  const pathname = usePathname();

  return (
    <div className='flex flex-col space-y-8'>
      <div className='mx-auto grid w-full max-w-6xl gap-2'>
        <h1 className='text-3xl font-semibold'>Settings</h1>
      </div>
      <div className='mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]'>
        <nav className='grid gap-4 text-sm text-muted-foreground' x-chunk='dashboard-04-chunk-0'>
          {links.map((menu) => (
            <Link key={menu.title} href={menu.href}>
              <div className={cn(pathname === menu.href && 'font-semibold text-primary')}>{menu.title}</div>
            </Link>
          ))}
        </nav>
        <div className='grid gap-6'>{children}</div>
      </div>
    </div>
  );
};

export default SubmenuLayout;
