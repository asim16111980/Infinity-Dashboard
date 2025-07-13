import { LucideIcon } from "lucide-react";

export interface ButtonProps {
  title?: string;
  lucideIcon?: LucideIcon;
  className?: string;
  onClick?: (event: React.PointerEvent<HTMLButtonElement>) => void;
}

export interface LinkButtonProps {
  title: string;
  lucideIcon?: LucideIcon;
  href: string;
  className?: string;
}
