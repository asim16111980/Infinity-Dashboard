"use client";

import React from "react";
import clsx from "clsx";
import Icon from "../Icon/Icon";
import { ButtonProps } from "./button.type";
import Link from "next/link";

const RegularButton = ({
  variant = "primary",
  title,
  iconName,
  iconClassName,
  ...props
}: ButtonProps) => {
  const classes = clsx(
    "flex items-center justify-center rounded select-none",
    {
      "opacity-40 cursor-not-allowed pointer-events-none": props.disabled,
    },
    props.className || [
      "gap-2 px-6 py-2",
      {
        "text-white text-base bg-blue-700": variant === "primary",
        "bg-white text-base text-blue-700": variant === "secondary",
      },
    ]
  );

  return (
    <button
      type={variant === "primary" ? "submit" : "button"}
      className={classes}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={title ?? undefined}
      {...props}
    >
      {iconName && (
        <Icon
          name={iconName}
          className={clsx("size-5", iconClassName)}
          aria-hidden="true"
        />
      )}
      <span className="capitalize">{title}</span>
    </button>
  );
};

export default RegularButton;
