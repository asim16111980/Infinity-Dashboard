import { Home, Tag, LucideIcon } from "lucide-react";

interface SidebarLink {
  href: string;
  label: string;
  icon: LucideIcon;
  badgeCount?: number;
}

export const SIDEBAR_LINKS: SidebarLink[] = [
  { href: "/", label: "dashboard", icon: Home },
  { href: "/products", label: "products", icon: Tag, badgeCount: 16 },
];
