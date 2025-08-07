import { IconName } from "../Icon/icons";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  iconName?: IconName;
  iconClassName?: string;
  title?: string;
}