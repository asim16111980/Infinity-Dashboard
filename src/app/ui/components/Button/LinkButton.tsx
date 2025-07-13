import clsx from "clsx";
import { LinkButtonProps } from "./button.type";
import LucideIcon from "../LucideIcon/LucideIcon";
import Link from "next/link";

const LinkButton = ({
  title,
  lucideIcon,
  href,
  className,
}: LinkButtonProps) => {
  return (
    <Link
      type="button"
      className={clsx(
        "w-40 h-10 flex items-center justify-center gap-2 text-white text-base bg-blue-700 capitalize rounded",
        className
      )}
      href={href}
    >
      {lucideIcon && <LucideIcon lucideIcon={lucideIcon} className="size-6" />}
      <span>{title}</span>
    </Link>
  );
};

export default LinkButton;
