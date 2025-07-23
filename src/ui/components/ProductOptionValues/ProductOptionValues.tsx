"use client";

import { useState } from "react";
import IconButton from "../Button/IconButton";
import { ProductOptionValuesProps } from "./productOptionValues.type";

const ProductOptionValues = ({
  label,
  selectedOption,
  initialValues,
  className,
  onRemoveValue,
}: ProductOptionValuesProps) => {
  const [values, setValues] = useState<string[]>(initialValues);

  const handleRemoveValue = (selectedOption: string, value: string) => {
    const newValues = values.filter((initialValue) => {
      return value !== initialValue;
    });
    setValues(newValues);
    if (onRemoveValue) {
      onRemoveValue(selectedOption, value);
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
            onClick={() => handleRemoveValue(selectedOption, value)}
            className="size-6 text-slate-400"
          />
        </span>
      ))}
    </label>
  );
};

export default ProductOptionValues;
