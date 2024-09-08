import {
  Heart,
  Home,
  LineChart,
  Lock,
  Package,
  PersonStanding,
  ShoppingCart,
  Timer,
  Users,
  Zap,
  ZoomIn,
} from 'lucide-react';

import { SidebarMenu } from '@/types/navigation';

export const SIDEBAR_LINKS: SidebarMenu[] = [
  { title: 'Dashboard', href: '#', icon: Home, badge: 6, active: true },
  { title: 'Orders', href: '#', icon: ShoppingCart },
  { title: 'Products', href: '#', icon: Package },
  { title: 'Customers', href: '#', icon: Users },
  { title: 'Analytics', href: '#', icon: LineChart },
];

export const FEATURES_LIST = [
  {
    title: 'Performance',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, harum?',
    icon: Timer,
  },
  {
    title: 'Innovation',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, harum?',
    icon: Zap,
  },
  {
    title: 'Quality',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, harum?',
    icon: ZoomIn,
  },
  {
    title: 'Accessibility',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, harum?',
    icon: PersonStanding,
  },
  {
    title: 'Security',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, harum?',
    icon: Lock,
  },
  {
    title: 'Support',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, harum?',
    icon: Heart,
  },
];
