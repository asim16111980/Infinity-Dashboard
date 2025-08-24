import { IconName } from "../Icon";
import { LinkProps } from "next/link";

export interface CustomLinkProps extends LinkProps {
  variant?: "primary" | "secondary" | "custom";
  title?: string;
  className?: string;
  iconName?: IconName;
  iconClassName?: string;
}
