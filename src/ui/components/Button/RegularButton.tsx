"use client";

import React from "react";
import clsx from "clsx";
import Icon from "../Icon/Icon";
import { ButtonProps } from "./button.type";
import Link from "next/link";

const RegularButton = ({
  asLink = false,
  href,
  variant = "primary",
  title,
  iconName,
  iconClassName,
  className,
  onClick,
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  const classes = clsx(
    "flex items-center justify-center",
    className
  );

  if (asLink) {
    return (
      <Link
        href={href ?? "#"}
        className={classes}
        aria-label={title ?? undefined}
      >
        {iconName && (
          <Icon name={iconName} className={iconClassName} aria-hidden="true" />
        )}
        <span className="capitalize">{title}</span>
      </Link>
    );
  }

  return (
    <button
      type={variant === "primary" ? "submit" : "button"}
      className={classes}
      onClick={onClick}
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
      {title}
    </button>
  );
};

export default RegularButton;
