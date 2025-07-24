"use client";

import { useState } from "react";
import IconButton from "../Button/IconButton";
import { ProductOptionValuesProps } from "./productOptionValues.type";
import { DropdownOption } from "../Dropdown";

const ProductOptionValues = ({
  label,
  // initialValues,
  selectedOption,
  className,
  onRemoveValue,
}: ProductOptionValuesProps) => {
  const [values, setValues] = useState<string[]>(selectedOption.value || []);

  const handleRemoveValue = (selectedLabel: string, value: string) => {
    const newValues = values.filter((initialValue) => {
      return value !== initialValue;
    });
    setValues(newValues);
    if (onRemoveValue) {
      onRemoveValue(selectedLabel, value);
    }
  };

  return (
    <label className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 bg-white rounded border border-slate-200 capitalize">
      <span>{label}</span>
      {values.map((value, index) => (
        <span
          key={index}
          className="w-14 h-6 flex items-center justify-center bg-slate-200 rounded "
        >
          <span>{value}</span>
          <IconButton
            name="x"
            onClick={() => handleRemoveValue(selectedOption.label, value)}
            className="size-6 text-slate-400"
          />
        </span>
      ))}
    </label>
  );
};

export default ProductOptionValues;
