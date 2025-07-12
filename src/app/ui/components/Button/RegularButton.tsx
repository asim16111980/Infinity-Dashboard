import clsx from "clsx";
import { ButtonProps } from "./button.type";

const RegularButton = ({ title, className, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "w-24 h-10 flex items-center justify-center bg-white text-base text-blue-700 capitalize rounded",
        className 
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default RegularButton;
