"use client";

import clsx from "clsx";
import { ToggleButtonProps } from "./button.type";
import { useState } from "react";

const ToggleButton = ({
  label,
  className,
  checked,
  onChange,
}: ToggleButtonProps) => {
  const [checkedState, setCheckedState] = useState(checked || false);
  const handleChange = () => {
    setCheckedState(!checkedState);
    if (onChange) {
      onChange(checkedState);
    }
  };

  return (
    <label
      className={clsx(
        "flex gap-3 text-base text-slate-900 cursor-pointer select-none",
        className
      )}
    >
      <input
        type="checkbox"
        className="hidden peer"
        checked={checkedState}
        onChange={handleChange}
      />
      <span className="w-11 h-6 flex items-center justify-start p-1 rounded-2xl bg-blue-100 transition duration-300 peer-checked:bg-blue-600 peer-checked:justify-end">
        <span className="size-4 rounded-full bg-white"></span>
      </span>
      <span>{label}</span>
    </label>
  );
};

export default ToggleButton;
