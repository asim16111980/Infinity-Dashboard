"use client";
import clsx from "clsx";
import { TextInputProps } from "./textInput.type";
import React from "react";

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ ...props }, ref) => {
    return (
      <label
        className={clsx("flex flex-col gap-1 select-none", props.className)}
      >
        <span className="text-sm text-slate-600 capitalize">{props.label}</span>
        <input
          ref={ref}
          type={props.type || "text"}
          className="w-full h-10 px-4 py-2 border border-slate-200 rounded-md text-base placeholder:text-slate-400 text-slate-900 capitalize focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...props}
        />
        {props.error && (
          <span className="text-sm text-red-500">{props.error}</span>
        )}
      </label>
    );
  }
);

export default TextInput;
