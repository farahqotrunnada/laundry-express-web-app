import { LucideIcon } from 'lucide-react';

export interface NavigationLink {
  title: string;
  href: string;
  description?: string;
}

export interface NavigationItem {
  title: string;
  description: string;
  items: NavigationLink[];
  icon?: LucideIcon;
}

export interface SidebarMenu {
  title: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  badge?: number | string;
}
