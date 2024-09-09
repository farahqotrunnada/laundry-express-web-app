export interface NavigationLink {
  title: string;
  href: string;
}

export interface NavigationItem {
  title: string;
  description: string;
  href?: string;
  items?: NavigationLink[];
}

export interface SidebarMenu {
  title: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  badge?: number | string;
}
