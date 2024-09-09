import { Car, Heart, Home, Lock, PersonStanding, Shirt, ShoppingCart, Timer, Users, Zap, ZoomIn } from 'lucide-react';

import { SidebarMenu } from '@/types/navigation';

export const PROJECT_NAME = process.env.NEXT_PUBLIC_PROJECT_NAME as string;
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

export const SIDEBAR_LINKS: SidebarMenu[] = [
  { title: 'Dashboard', href: '/dashboard', icon: Home, badge: 6 },
  { title: 'Orders', href: '/dashboard/orders', icon: ShoppingCart },
  { title: 'Laundry Item', href: '/dashboard/laundry-items', icon: Shirt },
  { title: 'Customers', href: '/dashboard/customers', icon: Users },
  { title: 'Deliveries', href: '/dashboard/deliveries', icon: Car },
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
