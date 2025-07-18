import Link from "next/link";
import { SidebarLinkProps } from "./sidebarLink.type";
import clsx from "clsx";
import Icon from "../Icon/Icon";

const SidebarLink = ({
  isActive,
  href,
  iconName,
  label,
  badgeCount,
}: SidebarLinkProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        "size-full flex items-center gap-4 px-4 rounded select-none",
        {
          "bg-white text-gray-500": isActive,
          "bg-transparent text-white": !isActive,
        }
      )}
    >
      <Icon name={iconName} className="size-6" />
      <span className="flex-1 text-sm capitalize">{label}</span>
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
