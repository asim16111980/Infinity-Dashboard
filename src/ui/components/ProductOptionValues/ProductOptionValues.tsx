"use client";
import { memo, useCallback, useEffect } from "react";
import IconButton from "../Button/IconButton";
import { ProductOptionValuesProps } from "./productOptionValues.type";
import clsx from "clsx";

const ProductOptionValues = memo(
  ({ label, values, className, onRemoveValue }: ProductOptionValuesProps) => {
    const handleRemoveValue = useCallback(
      (removedValue: string) => {
        if (onRemoveValue) {
          onRemoveValue(removedValue);
        }
      },
      [onRemoveValue]
    );
    return (
      <div
        className={clsx(
          "w-full flex flex-col gap-1 text-sm text-slate-600 bg-white capitalize select-none",
          className
        )}
      >
        <span className="text-sm text-slate-600">{label}</span>
        <div className="w-fit h-10 flex items-center gap-2 px-4 py-2 rounded border border-slate-200">
          {values.map((value, index) => (
            <span
              key={index}
              className="w-fit h-6 flex items-center justify-center gap-1 p-2 bg-slate-200 rounded"
            >
              <span>{value}</span>
              {onRemoveValue && (
                <IconButton
                  iconName="x"
                  aria-label={`Remove ${value}`}
                  onClick={() => handleRemoveValue(value)}
                  className="size-6 text-slate-400 p-0.5"
                />
              )}
            </span>
          ))}
        </div>
      </div>
    );
  }
);

export default ProductOptionValues;
