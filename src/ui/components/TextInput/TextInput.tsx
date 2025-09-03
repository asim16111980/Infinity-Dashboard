"use client";
import clsx from "clsx";
import { TextInputProps } from "./textInput.type";
import React from "react";

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, helperText, className, type, ...inputProps }, ref) => {
    return (
      <label className={clsx("flex flex-col gap-1 select-none", className)}>
        {label && (
          <span className="text-sm text-slate-600 capitalize">{label}</span>
        )}

        <input
          ref={ref}
          type={type || "text"}
          className={clsx(
            "w-full h-10 px-4 py-2 border-none rounded-md text-base placeholder:text-slate-400 text-slate-900 capitalize focus:outline-none ring-2 focus:ring-blue-500",
            error ? "ring-red-500" : "ring-slate-200"
          )}
          {...inputProps}
        />

        {error && <span className="text-sm text-red-500">{helperText}</span>}
      </label>
    );
  }
);

export default TextInput;
