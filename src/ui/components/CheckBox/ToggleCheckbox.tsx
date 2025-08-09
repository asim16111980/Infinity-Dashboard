"use client";
import clsx from "clsx";
import { ToggleCheckboxProps } from "../CheckBox/checkBox.type";
import { useEffect, useState } from "react";

const ToggleCheckbox = ({
  label,
  labelClasses,
  ...props
}: ToggleCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(props.checked);

  useEffect(() => {
  setIsChecked(props.checked);
}, [props.checked]);

  return (
    <label
      className={clsx(
        "flex items-center gap-3 text-base text-slate-900 cursor-pointer select-none",
        labelClasses
      )}
    >
      <input
        type="checkbox"
        className="size-0 left-4 top-0 hidden peer"
        {...props}
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <span className="w-11 h-6 flex items-center justify-start p-1 rounded-2xl bg-blue-100 transition duration-300 peer-checked:bg-blue-600 peer-checked:justify-end">
        <span className="size-4 rounded-full bg-white"></span>
      </span>
      <span>{label}</span>
    </label>
  );
};

export default ToggleCheckbox;
