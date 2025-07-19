"use client";

import { clsx } from "clsx";
import { TextareaProps } from "./textarea.type";

const Textarea = ({
  label,
  placeholder,
  rows,
  cols,
  className,
}: TextareaProps) => {
  return (
    <label className={clsx("flex flex-col gap-1 select-none", className)}>
      <span className="text-sm text-slate-600 capitalize">{label}</span>
      <textarea
        rows={rows}
        cols={cols}
        // value={value}
        // onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-24 px-4 py-2 border border-slate-200 rounded-md p-2 text-base text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />
    </label>
  );
};

export default Textarea;
