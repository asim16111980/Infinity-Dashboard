import Link from "next/link";
import { ReactElement } from "react";
import { IconName } from "../Icon/icons";

type LinkChild = ReactElement<typeof Link>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asLink?: boolean;
  href?: string;
  variant?: "primary" | "secondary";
  children?: LinkChild;
  iconName?: IconName;
  iconClassName?: string;
  title?: string;
}

export interface ToggleButtonProps {
  label?: string;
  className?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
