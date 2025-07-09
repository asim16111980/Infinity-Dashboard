import Link from "next/link";
import { SidebarLinkProps } from "../types/sidebarLink";
import Icon from "./Icon";
import clsx from "clsx";

const SidebarLink = ({
  isActive,
  href,
  icon,
  label,
  badgeCount,
}: SidebarLinkProps) => {
  return (
    <Link
      href={href}
      className={clsx("w-full h-11 flex items-center gap-4 px-4 rounded", {
        "bg-white text-gray-500": isActive,
        "hover:bg-gray-700 text-white bg-transparent":
          !isActive,
      })}
    >
      <Icon name={icon} className="size-6" />
      <span className="text-sm capitalize">{label}</span>
      {badgeCount && (
        <span
          className={clsx(
            "w-7 h-4 flex items-center justify-center ml-auto  text-xs font-bold rounded-xl",
            {
              "bg-transparent text-gray-500": isActive,
              "bg-gray-950 text-white": !isActive,
            }
          )}
        >
          {badgeCount}
        </span>
      )}
    </Link>
  );
};

export default SidebarLink;
