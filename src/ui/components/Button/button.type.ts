import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";

type LinkChild = ReactElement<typeof Link>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asLink?: boolean;
  href?: string;
  variant?: "primary" | "secondary";
  children?: LinkChild;
  lucideIcon?: LucideIcon;
  iconClassName?: string;
  title?: string;
}
