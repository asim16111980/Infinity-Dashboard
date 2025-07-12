import { LucideIcon } from "lucide-react";

export interface ButtonProps {
    title: string;
    lucideIcon?: LucideIcon;
    className?: string;
    onClick?: (event: React.PointerEvent<HTMLButtonElement>) => void;
  }