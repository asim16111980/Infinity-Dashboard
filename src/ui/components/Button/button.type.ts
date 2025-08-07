import { IconName } from "../Icon/icons";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "custom";
  iconName?: IconName;
  iconClasses?: string;
  title?: string;
}