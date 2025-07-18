"use client";

import { usePathname } from "next/navigation";
import SidebarLink from "../components/SidebarLink/SidebarLink";
import { SIDEBAR_LINKS } from "@/constants/sidebarLinks";

const Sidebar = () => {
  const path = usePathname();
  return (
    <aside className="w-64 h-full bg-blue-950 text-white p-4">
      <nav>
        <ul className="flex flex-col">
          {SIDEBAR_LINKS.map((link) => (
            <li key={link.href}>
              <SidebarLink
                isActive={path === link.href}
                href={link.href}
                label={link.label}
                lucideIcon={link.icon}
                badgeCount={link.badgeCount}
              />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
