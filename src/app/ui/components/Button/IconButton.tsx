import clsx from "clsx";
import LucideIcon from "../LucideIcon/LucideIcon";
import { ButtonProps } from "./button.type";

const IconButton = ({ lucideIcon, className, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "size-10 flex items-center justify-center rounded bg-white text-blue-500 border border-slate-200",
        "hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600",
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
