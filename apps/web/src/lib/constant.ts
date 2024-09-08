import { Home, LineChart, Package, ShoppingCart, Users } from 'lucide-react';

import { SidebarMenu } from '@/types/navigation';

export const SIDEBAR_LINKS: SidebarMenu[] = [
  { title: 'Dashboard', href: '#', icon: Home, badge: 6, active: true },
  { title: 'Orders', href: '#', icon: ShoppingCart },
  { title: 'Products', href: '#', icon: Package },
  { title: 'Customers', href: '#', icon: Users },
  { title: 'Analytics', href: '#', icon: LineChart },
];
