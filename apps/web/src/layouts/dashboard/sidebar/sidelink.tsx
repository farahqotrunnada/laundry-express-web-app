import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { SidebarMenu } from '@/types/navigation';
import { cn } from '@/lib/utils';

interface SidebarMenuProps extends React.PropsWithChildren {
  link: SidebarMenu;
  path: string;
}

const SidebarLink: React.FC<SidebarMenuProps> = ({ link, path }) => {
  const Icon = link.icon;

  return (
    <Link
      href={link.href}
      className={cn(
        'flex items-center gap-3 rounded-lg p-3 text-muted-foreground transition-all hover:text-primary',
        path === link.href && 'bg-accent text-foreground hover:text-foreground'
      )}>
      <Icon className='size-5' />
      {link.title}
      {link.badge && (
        <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>{link.badge}</Badge>
      )}
    </Link>
  );
};

export default SidebarLink;
