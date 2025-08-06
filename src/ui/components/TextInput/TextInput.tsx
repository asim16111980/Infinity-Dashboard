"use client";

import clsx from "clsx";
import { TextInputProps } from "./textInput.type";
import { useState } from "react";

const TextInput = ({ label, placeholder, className, onKeyDown }: TextInputProps) => {
  const [value, setValue] = useState("");
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown && e.key === "Enter") {
      onKeyDown?.(e.currentTarget.value)&& setValue(""); 
    }
  };
  return (
    <label className={clsx("flex flex-col gap-1 select-none", className)}>
      <span className="text-sm text-slate-600 capitalize">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full h-10 px-4 py-2 border border-slate-200 rounded-md p-2 text-base text-slate-400 capitalize focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </label>
  );
};

export default TextInput;
