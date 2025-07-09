import { IconName } from "./icons";

export type SidebarLinkProps = {
  isActive?: boolean;
  href: string;
  icon: IconName;
  label: string;
  badgeCount?: number | null;
};
