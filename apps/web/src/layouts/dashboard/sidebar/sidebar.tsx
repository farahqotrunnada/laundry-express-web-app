import * as React from 'react';

import AppIcon from '@/components/app-icon';
import { Droplets } from 'lucide-react';
import Link from 'next/link';
import { SIDEBAR_LINKS } from '@/lib/constant';
import SidebarCard from './card';
import SidebarLink from '@/layouts/dashboard/sidebar/sidelink';

interface SidebarProps {
  //
}

const Sidebar: React.FC<SidebarProps> = ({ ...props }) => {
  return (
    <div className='hidden border-r bg-zinc-50/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-16 items-center border-b px-6'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <AppIcon className='h-6 w-6' />
            <span className='whitespace-nowrap'>{process.env.NEXT_PUBLIC_APP_NAME}</span>
          </Link>
        </div>

        <div className='flex-1'>
          <nav className='grid items-start px-4 gap-1 text-sm font-medium '>
            {SIDEBAR_LINKS.map((link) => (
              <SidebarLink key={link.title} link={link} />
            ))}
          </nav>
        </div>

        <div className='mt-auto p-4'>
          <SidebarCard />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
