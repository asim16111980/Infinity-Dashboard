"use client";

import clsx from "clsx";
import { ButtonProps } from "./button.type";
import Icon from "../Icon/Icon";

const IconButton = ({ iconName,iconClassName, className, onClick }: ButtonProps) => {
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
      {iconName && <Icon name={iconName} className={iconClassName}/>}
    </button>
  );
};

export default IconButton;
