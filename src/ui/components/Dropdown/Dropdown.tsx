"use client";

import { ChevronDown } from "lucide-react";
import { DropdownOption, DropdownProps } from "./dropdown.type";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const Dropdown = ({
  label,
  title,
  currentOption,
  options,
  className,
  onChange,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<
    DropdownOption | undefined
  >(currentOption);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelectOption = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);

    if (onChange) {
      onChange(option);
    }
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
  }, [isOpen]);

  useEffect(() => {
    setSelectedOption(currentOption);
  }, [currentOption]);

  return (
    <div className="flex flex-col gap-1 select-none">
      <span className="text-sm text-slate-600 capitalize">{label}</span>
      <div
        ref={dropdownRef}
        className={clsx(
          "min-w-44 h-10 relative bg-white border border-slate-200 rounded",
          className
        )}
      >
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className="size-full flex items-center justify-between px-4"
          onClick={() => setIsOpen((val) => !val)}
        >
          <span className="capitalize text-base text-slate-400">
            {selectedOption?.label || title}
          </span>
          {
            <ChevronDown
              className={clsx(
                "transition-transform duration-300 text-slate-500",
                {
                  "rotate-180": isOpen,
                  "rotate-0": !isOpen,
                }
              )}
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
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelectOption(option)}
              className={clsx("px-4 py-2 hover:bg-slate-100 cursor-pointer", {
                "opacity-40 cursor-not-allowed pointer-events-none":
                  option.disabled,
              })}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
