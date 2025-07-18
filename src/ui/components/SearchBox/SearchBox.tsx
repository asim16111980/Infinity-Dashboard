import { Search } from "lucide-react";
import { SearchBoxProps } from "./serachBox.type";
import clsx from "clsx";

const SearchBox = ({ className, iconClassName, inputClassName }: SearchBoxProps) => {
  return (
    <div className={clsx("relative", className)}>
      <Search className={clsx("size-6 absolute left-2 top-1/2 transform -translate-y-1/2", iconClassName)} />
      <input
        type="search"
        placeholder="Search..."
        className={clsx(
          "pl-10 pr-4 size-full bg-transparent border-none outline-none",
          inputClassName
        )}
      />
    </div>
  );
};

export default SearchBox;
