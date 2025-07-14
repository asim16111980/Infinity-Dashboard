"use client";

import { ChevronDown } from "lucide-react";
import { DropdownProps } from "./dropdown.type";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const Dropdown = ({ title, items, className }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelectItem = (index: number) => {
    setSelectedItemIndex(index);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={clsx(
        "w-44 h-10 relative border border-slate-200 rounded",
        className
      )}
    >
      <button
        type="button"
        className="size-full flex items-center justify-between px-4"
        onClick={() => setIsOpen((val) => !val)}
      >
        <span className="capitalize">
          {selectedItemIndex === null ? title : items[selectedItemIndex]}
        </span>
        {
          <ChevronDown
            className={clsx("transition-transform duration-300", {
              "rotate-180": isOpen,
              "rotate-0": !isOpen,
            })}
          />
        }
      </button>
      <ul
        className={clsx(
          "w-full flex flex-col absolute top-full left-0 bg-white border border-slate-200 rounded shadow-md overflow-hidden z-50 transition duration-300",
          {
            "opacity-100 visible translate-y-0": isOpen,
            "opacity-0 invisible -translate-y-2": !isOpen,
          }
        )}
      >
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleSelectItem(index)}
            className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
5;
