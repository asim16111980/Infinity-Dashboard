import { House } from "lucide-react";
import SidebarLink from "./SidebarLink";

const SidebarNav = () => {
  return (
    <aside className="w-64 h-full bg-blue-950 text-white p-4">
      <nav>
        <ul className="flex flex-col">
          <li>
            <SidebarLink href="/" label="dashboard" icon="" badgeCount={16} />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarNav;
