"use client";

import { House } from "lucide-react";
import SidebarLink from "./SidebarLink";
import { usePathname } from "next/navigation";
import { SIDEBAR_LINKS } from "@/constants/sidebarLinks";

const SidebarNav = () => {
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
                icon={link.icon}
                badgeCount={link.badgeCount || null}
              />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarNav;
