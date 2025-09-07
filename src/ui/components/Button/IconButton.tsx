"use client";

import clsx from "clsx";
import { ButtonProps } from "./button.type";
import Icon from "../Icon/Icon";

const IconButton = ({ iconName,iconClasses, className, onClick, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "flex items-center justify-center",
        "transition-colors duration-200",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {iconName && <Icon name={iconName} className={iconClasses} />}
    </button>
  );
};

export default IconButton;
