import Link from "next/link";
import { CustomLinkProps } from "./customLink.type";
import Icon from "../Icon/Icon";
import clsx from "clsx";

const CustomLink = ({
  variant = "primary",
  title,
  iconName,
  iconClassName,
  className,
  href = "#",
  ...props
}: CustomLinkProps) => {
  const classes = clsx(
    "inline-flex items-center justify-center rounded select-none",
    {
      "gap-2 px-6 py-2 text-white text-base bg-blue-600": variant === "primary",
      "bg-white text-base text-blue-600": variant === "secondary",
    },
    variant === "custom" && className
  );

  return (
    <Link
      href={href}
      className={classes}
      aria-label={title ?? undefined}
      {...props}
    >
      {iconName && (
        <Icon name={iconName} className={iconClassName} aria-hidden="true" />
      )}
      <span className="capitalize">{title}</span>
    </Link>
  );
};

export default CustomLink;
