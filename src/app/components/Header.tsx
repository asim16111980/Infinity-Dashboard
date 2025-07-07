import { Bell, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between p-4 bg-blue-950 text-white filter drop-shadow">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <h1>Infinity</h1>
      </div>
      <div className="flex-1 mx-32 relative">
        <Search className="size-6 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-50" />
        <input
          type="search"
          placeholder="Search..."
          className="pl-10 pr-4 w-full min-h-6 bg-transparent text-sm text-white placeholder:text-white"
        />
      </div>
      <div className="flex items-center gap-6">
        <button type="button" className="size-7 flex items-center gap-4 relative">
          <Bell className="size-6" />
          <span className="size-4 absolute -top-1 right-0 z-10 rounded-full bg-blue-600 text-white text-xs font-bold">
            1
          </span>
        </button>
        <div className="flex items-center gap-2">
          <Image
            src="/user-avatar.png"
            alt="User Avatar"
            width={36}
            height={36}
          />
          <Link href="/profile">Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
