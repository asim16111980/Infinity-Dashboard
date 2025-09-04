"use client"
import clsx from "clsx";
import { Check } from "lucide-react";
import { CheckBoxProps } from "./checkBox.type";
import { useState } from "react";

const CheckBox = ({
  label,
  checkboxClasses,
  labelClasses,
  titleClasses,
  ...props
}: CheckBoxProps) => {
  // const [isChecked, setIsChecked] = useState(false);
  return (
    <label className={clsx("w-fit cursor-pointer select-none flex items-center gap-3", labelClasses)}>
      <div className={clsx("relative flex justify-center items-center size-4 ", checkboxClasses)}>
        <input
          type="checkbox"
          className={clsx(
            "size-full appearance-none peer checked:bg-blue-600 border border-slate-200 bg-white rounded checked:border-blue-600 cursor-pointer",
            props.className
          )}
          // checked={isChecked}
          // onChange={(e) => setIsChecked(e.target.checked)}
          {...props}
        />
        <Check className="absolute size-full stroke-[4] p-px inset-0 text-white invisible peer-checked:visible" />
      </div>
      <span className={titleClasses}>{label}</span>
    </label>
  );
};

export default CheckBox;
