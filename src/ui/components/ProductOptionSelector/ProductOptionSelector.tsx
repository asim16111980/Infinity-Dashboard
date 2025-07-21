"use client";

import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import {
  ProductOptionSelectorProps,
  ProductOptionValues,
} from "./productOptionSelector.type";

const ProductOptionSelector = ({
  options,
  selectedOption,
  onOptionChange,
  values,
  onRemoveValue,
}: ProductOptionSelectorProps) => {
  const [optionsCount, setOptionsCount] = useState<number>(1);
    const [optionValues, setOptionValues] = useState<ProductOptionValues[]>([]);
    
    const handleChangeOption = () => {
        
    }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-slate-600">Option {optionsCount}</label>
      <Dropdown
        label="size"
        title="size"
        items={["size", "color"]}
        onChange={}
      />
      <select
        value={selectedOption}
        onChange={(e) => onOptionChange(e.target.value)}
        className="border rounded p-2"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <label className="text-sm text-slate-600">Values</label>
      <div className="flex flex-wrap gap-2">
        {values.map((val) => (
          <div
            key={val}
            className="flex items-center gap-1 bg-slate-100 rounded px-2 py-1 text-sm"
          >
            {val}
            <button
              onClick={() => onRemoveValue(val)}
              className="text-slate-500 hover:text-red-500"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
