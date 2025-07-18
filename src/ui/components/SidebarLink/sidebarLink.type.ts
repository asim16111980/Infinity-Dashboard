import { LucideIcon } from "lucide-react";

export interface SidebarLinkProps {
  isActive?: boolean;
  href: string;
  lucideIcon: LucideIcon;
  label: string;
  badgeCount?: number;
}
