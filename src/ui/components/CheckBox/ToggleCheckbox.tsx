"use client";
import clsx from "clsx";
import { ToggleCheckboxProps } from "../CheckBox/checkBox.type";
import { useState } from "react";

const ToggleCheckbox = ({
  label,
  labelClasses,
  ...props
}: ToggleCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label
      className={clsx(
        "flex gap-3 text-base text-slate-900 cursor-pointer select-none",
        labelClasses
      )}
    >
      <input
        type="checkbox"
        className="hidden peer"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        {...props}
      />
      <span className="w-11 h-6 flex items-center justify-start p-1 rounded-2xl bg-blue-100 transition duration-300 peer-checked:bg-blue-600 peer-checked:justify-end">
        <span className="size-4 rounded-full bg-white"></span>
      </span>
      <span>{label}</span>
    </label>
  );
};

export default ToggleCheckbox;
