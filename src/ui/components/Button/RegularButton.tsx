"use client";

import React from "react";
import clsx from "clsx";
import Icon from "../Icon/Icon";
import { ButtonProps } from "./button.type";
import Link from "next/link";

const RegularButton = ({
  variant = "primary",
  title,
  className = "",
  iconName,
  iconClasses,
  ...props
}: ButtonProps) => {
  const classes = clsx(
    "flex items-center justify-center rounded select-none",
    variant !== "custom" && "gap-2 px-6 py-2",
    {
      "opacity-40 cursor-not-allowed pointer-events-none": props.disabled,
      "text-white text-base bg-blue-600": variant === "primary",
      "bg-white text-base text-blue-600": variant === "secondary",
      [className]: variant === "custom",
    }
  );

  return (
    <button
     type={props.type || (variant === "primary" ? "submit" : "button")}
      className={classes}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={title ?? undefined}
      {...props}
    >
      {iconName && (
        <Icon
          name={iconName}
          className={iconClasses || "size-5"}
          aria-hidden="true"
        />
      )}
      <span className="capitalize">{title}</span>
    </button>
  );
};

export default RegularButton;
