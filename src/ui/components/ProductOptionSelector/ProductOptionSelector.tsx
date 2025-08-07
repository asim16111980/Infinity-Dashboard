"use client";

import { useCallback, useEffect, useState } from "react";
import { ProductOptionSelectorProps } from "./productOptionSelector.type";
import Dropdown from "../Dropdown/Dropdown";
import { Option } from "../Dropdown";
import Tag from "../Tag";

const ProductOptionSelector = ({
  id,
  label,
  initialOption,
  options,
  onChangeOption,
}: ProductOptionSelectorProps) => {
  const [currentOption, setCurrentOption] = useState<Option>(initialOption);

  const handleChangeOption = useCallback((selectedOption: Option) => {
    setCurrentOption(selectedOption);
  }, []);

  const handleRemoveValue = useCallback((removedValueID: number) => {
    setCurrentOption((prev) => ({
      ...prev,
      value: prev.value.filter((v) => v.id !== removedValueID),
    }));
  }, []);

  useEffect(() => {
    onChangeOption?.(id, currentOption);
  }, [currentOption]);

  useEffect(() => {
    if (initialOption) {
      setCurrentOption(initialOption);
    }
  }, [initialOption]);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-base font-bold text-slate-900">{label}</span>
      <div className="flex items-center gap-6">
        <Dropdown
          label={currentOption.label}
          currentOption={currentOption}
          options={options}
          onChange={handleChangeOption}
        />
        {currentOption.value.length > 0 && (
          <div className="w-full flex flex-col gap-1 text-sm text-slate-600 bg-white capitalize select-none">
            <span className="text-sm text-slate-600 capitalize">Value</span>
            <div className="w-fit h-10 flex items-center gap-2 px-4 py-2 rounded border border-slate-200">
              {currentOption.value.map((value) => (
                <Tag
                  key={value.id}
                  id={value.id}
                  title={value.title}
                  onRemoveValue={handleRemoveValue}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductOptionSelector;
