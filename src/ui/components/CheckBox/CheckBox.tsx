import clsx from "clsx";
import { Check } from "lucide-react";
import { CheckBoxProps } from "./checkBox.type";

const CheckBox = ({ label, className, checkBoxClassName,inputClassName }: CheckBoxProps) => {
  return (
    <label className={clsx("cursor-pointer flex items-center", className)}>
      <div className={clsx("relative", checkBoxClassName)}>
        <input
          type="checkbox"
          className={clsx("size-full appearance-none peer checked:bg-blue-600 checked:border-blue-600 cursor-pointer",inputClassName)}
        />
        <Check className="absolute size-full stroke-[4] p-1 inset-0 text-white invisible peer-checked:visible" />
      </div>
      {label}
    </label>
  );
};

export default CheckBox;
