import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchBox from "../components/SearchBox/SearchBox";

const Header = ({ userAvatar }: { userAvatar: string }) => {
  return (
    <header className="w-full h-16 flex items-center justify-between gap-36 p-4 bg-gray-950 text-white filter drop-shadow">
      <div className="flex items-center gap-2">
        {/* <Image src="/logo.png" alt="Logo" width={50} height={50} /> */}
        <h1>Infinity</h1>
      </div>
      <SearchBox className="h-6 flex-1" iconClassName="text-gray-50" inputClassName="text-sm text-white placeholder:text-white"/>
      <div className="flex items-center gap-6">
        <Link href="#" className="size-7 relative">
          <Bell className="size-6" />
          <span className="size-4 flex items-center justify-center absolute -top-1 right-0 z-10 rounded-full bg-blue-500 text-white text-xs font-bold">
            1
          </span>
        </Link>
        <Link href="/profile" className="flex items-center gap-2">
          {userAvatar ? (
            <Image
              src={userAvatar}
              alt="User Avatar"
              width={36}
              height={36}
              className="rounded-full"
            />
          ) : (
            <span className="size-9 flex items-center justify-center rounded-full bg-green-500 text-white uppercase">
              R
            </span>
          )}
          <span className="text-sm">Profile</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
