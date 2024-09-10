import {
  Car,
  Heart,
  Home,
  Lock,
  PersonStanding,
  Shirt,
  ShoppingCart,
  Store,
  Timer,
  Users,
  Zap,
  ZoomIn,
} from 'lucide-react';

import { SidebarMenu } from '@/types/navigation';

export const PROJECT_NAME = process.env.NEXT_PUBLIC_PROJECT_NAME as string;
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

export const SIDEBAR_LINKS: SidebarMenu[] = [
  {
    icon: Home,
    title: 'Dashboard',
    href: '/dashboard',
    roles: ['Driver', 'SuperAdmin', 'OutletAdmin', 'WashingWorker', 'IroningWorker', 'PackingWorker'],
  },
  { icon: Store, title: 'Outlets', href: '/dashboard/outlets', roles: ['SuperAdmin'] },
  { icon: Users, title: 'Customers', href: '/dashboard/customers', roles: ['SuperAdmin'] },
  { icon: Shirt, title: 'Laundry Item', href: '/dashboard/laundry-items', roles: ['SuperAdmin'] },
  { icon: ShoppingCart, title: 'Orders', href: '/dashboard/orders', roles: ['SuperAdmin', 'OutletAdmin'] },
  { icon: Car, title: 'Deliveries', href: '/dashboard/deliveries', roles: ['SuperAdmin', 'Driver'] },
  {
    icon: Zap,
    title: 'Jobs',
    href: '/dashboard/jobs',
    roles: ['SuperAdmin', 'IroningWorker', 'PackingWorker', 'WashingWorker'],
  },
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

export const AVATAR_LINKS = [
  { title: 'Profile', href: '/profile' },
  { title: 'Orders', href: '/orders' },
  { title: 'Support', href: '/support' },
];
