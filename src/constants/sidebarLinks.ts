import { IconName } from "@/ui/components/Icon/icons";

interface SidebarLink {
  href: string;
  label: string;
  icon:IconName;
  badgeCount?: number;
}

export const SIDEBAR_LINKS: SidebarLink[] = [
  { href: "/", label: "dashboard", icon: "home" },
  { href: "/products", label: "products", icon: "tag", badgeCount: 16 },
];
