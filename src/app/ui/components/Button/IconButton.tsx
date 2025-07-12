import clsx from "clsx";
import { ButtonProps } from "./button.type";
import LucideIcon from "../LucideIcon/LucideIcon";

const IconButton = ({ title, lucideIcon, className, onClick }: ButtonProps) => {
   
  return (
    <button
      type="button"
      className={clsx(
        "w-40 h-10 flex items-center justify-center gap-2 text-white text-base bg-blue-700 capitalize rounded",
        className
      )}
      onClick={onClick}
    >
      {lucideIcon && <LucideIcon lucideIcon={lucideIcon} className="size-6" />}
      <span>{title}</span>
    </button>
  );
};

export default IconButton;
