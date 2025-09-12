"use client";

import { usePathname } from "next/navigation";
import SidebarLink from "../components/SidebarLink/SidebarLink";
import { SIDEBAR_LINKS } from "@/constants/sidebarLinks";

const Sidebar = () => {
  const pathname = usePathname();

  // console.log(isActive);

  return (
    <aside className="w-64 bg-blue-950 text-white p-4">
      <nav>
        <ul className="flex flex-col">
          {SIDEBAR_LINKS.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <li key={link.href} className="w-full h-11">
                <SidebarLink
                  isActive={isActive}
                  href={link.href}
                  label={link.label}
                  iconName={link.icon}
                  badgeCount={link.badgeCount}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
