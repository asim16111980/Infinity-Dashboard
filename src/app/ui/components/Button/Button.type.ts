import { LucideIcon } from "lucide-react";

export interface ButtonProps {
  asChild?: boolean;
  href?: string;
  variant?: "primary" | "secondary";
  title?: string;
  lucideIcon?: LucideIcon;
  iconClassName?: string;
  className?: string;
  onClick?: (event: React.PointerEvent<HTMLButtonElement>) => void ;
}
