import clsx from "clsx";
import { LinkButtonProps } from "./button.type";

import Link from "next/link";

const LinkButton = ({
  title,
  lucideIcon,
  iconClassName,
  href,
  className,
}: LinkButtonProps) => {
  return (
    <Link
      type="button"
      className={clsx(
        "flex items-center justify-center capitalize ",
        className
      )}
      href={href}
    >
      {lucideIcon && <LucideIcon lucideIcon={lucideIcon} className={iconClassName} />}
      <span>{title}</span>
    </Link>
  );
};

export default LinkButton;
