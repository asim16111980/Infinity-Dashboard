"use client";

import { useEffect, useState } from "react";
import IconButton from "../Button/IconButton";
import { ProductOptionValuesProps } from "./productOptionValues.type";

const ProductOptionValues = ({
  label,
  selectedOption,
  className,
  onRemoveValue,
}: ProductOptionValuesProps) => {

  const handleRemoveValue = (selectedLabel: string, value: string) => {
    if (onRemoveValue) {
      onRemoveValue(selectedLabel, value);
    }
  };

  useEffect(() => {
    console.log("ProductOptionValues mounted or updated");
  }, []);

  return (
    <label className="w-full flex flex-col gap-1 text-sm text-slate-600 bg-white capitalize select-none">
      <span className="text-sm text-slate-600">{label}</span>
      <div className="w-fit h-10 flex items-center gap-2 px-4 py-2 rounded border border-slate-200">
        {selectedOption.value.map((value, index) => (
          <span
            key={index}
            className="w-fit h-6 flex items-center justify-center gap-1 p-2 bg-slate-200 rounded"
          >
            <span>{value}</span>
            <IconButton
              iconName="x"
              onClick={() => handleRemoveValue(selectedOption.label, value)}
              className="size-6 text-slate-400 p-0.5"
            />
          </span>
        ))}
      </div>
    </label>
  );
};

export default ProductOptionValues;
