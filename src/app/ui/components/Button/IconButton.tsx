import clsx from "clsx";
import { ButtonProps } from "./button.type";
import LucideIcon from "../LucideIcon/LucideIcon";

const IconButton = ({ lucideIcon, className, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "size-10 flex items-center justify-center rounded bg-white text-blue-500 border border-slate-200",
        className
      )}
      onClick={onClick}
    >
      {lucideIcon && <LucideIcon lucideIcon={lucideIcon} />}
    </button>
  );
};

export default IconButton;
