"use client";

import React from "react";
import clsx from "clsx";
import LucideIcon from "../LucideIcon/LucideIcon";
import { ButtonProps } from "./button.type";

const RegularButton = ({
  asLink = false,
  href,
  variant = "primary",
  title,
  lucideIcon,
  iconClassName,
  className,
  onClick,
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  const classes = clsx(
    "flex items-center justify-center gap-2 capitalize rounded px-4 py-2 transition focus:outline-none",
    className
  );
console.log(lucideIcon, "lucideIcon");

  if (asLink && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<any>,
      {
        className: clsx(
          (children as React.ReactElement<any>).props.className,
          classes
        ),
        "aria-label": title ?? undefined,
        ...props,
      },
      <>
        {lucideIcon && (
          <LucideIcon
            lucideIcon={lucideIcon}
            className={clsx("size-5", iconClassName)}
            aria-hidden="true"
          />
        )}
        {(children as React.ReactElement<any>).props.children ?? title}
      </>
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
      {lucideIcon && (
        <LucideIcon
          lucideIcon={lucideIcon}
          className={clsx("size-5", iconClassName)}
          aria-hidden="true"
        />
      )}
      {title}
    </button>
  );
};

export default RegularButton;
