import Link from "next/link";
import { SidebarLinkProps } from "../types/sidebarLink";

const SidebarLink = ({ href, icon, label, badgeCount }: SidebarLinkProps) => {
  return (
    <Link
      href={href}
      className="w-full h-11 flex items-center gap-4 text-gray-500 px-4 bg-white rounded"
    >
      {/* <House className="size-6 text-gray-500" /> */}
      <span className="text-sm capitalize">{label}</span>
      {badgeCount && (
        <span className="w-7 h-4 ml-auto bg-gray-950 text-white text-xs font-bold rounded-xl">
          {badgeCount}
        </span>
      )}
    </Link>
  );
};

export default SidebarLink;
