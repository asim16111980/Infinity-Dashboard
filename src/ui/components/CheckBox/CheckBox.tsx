"use client"
import clsx from "clsx";
import { Check } from "lucide-react";
import { CheckBoxProps } from "./checkBox.type";
import { useState } from "react";

const CheckBox = ({
  label,
  checkboxClasses,
  labelClasses,
  ...props
}: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label className={clsx("cursor-pointer flex items-center", labelClasses)}>
      <div className={clsx("relative", checkboxClasses)}>
        <input
          type="checkbox"
          className={clsx(
            "size-full appearance-none peer checked:bg-blue-600 checked:border-blue-600 cursor-pointer",
            props.className
          )}
          {...props}
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <Check className="absolute size-full stroke-[4] p-1 inset-0 text-white invisible peer-checked:visible" />
      </div>
      {label}
    </label>
  );
};

export default CheckBox;
