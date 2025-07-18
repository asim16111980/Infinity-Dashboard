import Link from "next/link";
import { SidebarLinkProps } from "./sidebarLink.type";
import LucideIcon from "../LucideIcon/LucideIcon";
import clsx from "clsx";

const SidebarLink = ({
  isActive,
  href,
  lucideIcon,
  label,
  badgeCount,
}: SidebarLinkProps) => {
  return (
    <Link
      href={href}
      className={clsx("w-full h-11 flex items-center gap-4 px-4 rounded", {
        "bg-white text-gray-500": isActive,
        "bg-transparent text-white": !isActive,
      })}
    >
      <LucideIcon lucideIcon={lucideIcon} className="size-6" />
      <span className="text-sm capitalize">{label}</span>
      <span
        className={clsx(
          "w-6 h-4 flex items-center justify-center ml-auto text-xs font-bold rounded-xl",
          {
            "bg-gray-950 text-white": !isActive && badgeCount && badgeCount > 0,
            hidden: !badgeCount || badgeCount === 0,
          }
        )}
      >
        {badgeCount}
      </span>
    </Link>
  );
};

export default SidebarLink;
