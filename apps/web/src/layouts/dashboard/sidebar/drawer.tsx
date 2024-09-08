import { Droplets, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SIDEBAR_LINKS } from '@/lib/constant';
import SidebarCard from './card';
import SidebarLink from '@/layouts/dashboard/sidebar/sidelink';

interface DrawerProps {
  //
}

const SidebarDrawer: React.FC<DrawerProps> = ({ ...props }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
          <Menu className='size-5' />
          <span className='sr-only'>Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='flex flex-col'>
        <Link href='#' className='flex items-center gap-2 px-3 text-lg font-semibold'>
          <Droplets className='h-6 w-6' />
          <span>{process.env.NEXT_PUBLIC_APP_NAME}</span>
        </Link>

        <nav className='grid items-start gap-1 text-sm font-medium mt-6'>
          {SIDEBAR_LINKS.map((link) => (
            <SidebarLink key={link.title} link={link} />
          ))}
        </nav>

        <div className='mt-auto'>
          <SidebarCard />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarDrawer;
