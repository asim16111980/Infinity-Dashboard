import { IconName } from "../Icon/icons";

export interface SidebarLinkProps {
  isActive?: boolean;
  href: string;
  iconName: IconName;
  label: string;
  badgeCount?: number;
}
