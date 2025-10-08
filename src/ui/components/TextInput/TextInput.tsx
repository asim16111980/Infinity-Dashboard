"use client";
import clsx from "clsx";
import { TextInputProps } from "./textInput.type";
import React, { useState } from "react";
import IconButton from "../Button/IconButton";

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    { label, showPassword, error, helperText, className, type, ...inputProps },
    ref
  ) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const inputType = showPassword
      ? passwordVisible
        ? "text"
        : "password"
      : type || "text";
    
    return (
      <label className={clsx("min-h-20 flex flex-col gap-1 select-none", className)}>
        {label && (
          <span className="text-sm text-slate-600 capitalize">{label}</span>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={inputType}
            autoCapitalize="current-password"
            className={clsx(
              "w-full px-4 py-3 border-none rounded text-base placeholder:text-slate-400 text-slate-900 focus:outline-none ring-2 focus:ring-blue-500",
              error ? "ring-red-500" : "ring-slate-200"
            )}
            {...inputProps}
          />
          {showPassword && (
            <IconButton
              iconName={passwordVisible ? "eye" : "eyeOff"}
              onClick={() => setPasswordVisible(!passwordVisible)}
              onMouseDown={(e) => e.preventDefault()}
              className="absolute right-2 top-1/2 -translate-y-1/2"
              iconClasses="size-4 text-slate-600"
            />
          )}
        </div>
        {error && <span className="text-sm text-red-500">{helperText}</span>}
      </label>
    );
  }
);

export default TextInput;
