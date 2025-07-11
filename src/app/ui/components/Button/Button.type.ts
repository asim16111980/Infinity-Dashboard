export interface ButtonProps {
    title: string;
    icon?: string;
    className?: string;
    onClick?: (event: React.PointerEvent<HTMLButtonElement>) => void;
  }