import clsx from "clsx";
import LucideIcon from "../LucideIcon/LucideIcon";
import { ButtonProps } from "./button.type";

const IconButton = ({ lucideIcon, className, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "flex items-center justify-center",
        "transition-colors duration-200",
        className
      )}
      onClick={onClick}
    >
      {lucideIcon && <LucideIcon lucideIcon={lucideIcon} />}
    </button>
  );
};

export default IconButton;
