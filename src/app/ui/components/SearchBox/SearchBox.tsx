import { Search } from "lucide-react";
import { SearchBox } from "./serachBox.type";
import clsx from "clsx";

const SearchBox = ({ className, inputClassName }: SearchBox) => {
  return (
    <div className={clsx("flex-1 mx-32 relative", className)}>
      <Search className="size-6 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-50" />
      <input
        type="search"
        placeholder="Search..."
        className={clsx(
          "pl-10 pr-4 w-full min-h-6 bg-transparent  outline-none",
          inputClassName
        )}
      />
    </div>
  );
};

export default SearchBox;
