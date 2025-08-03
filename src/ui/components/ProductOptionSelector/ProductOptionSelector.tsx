"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ProductOptionSelectorProps } from "./productOptionSelector.type";
import Dropdown from "../Dropdown/Dropdown";
import ProductOptionValues from "../ProductOptionValues";
import { DropdownOption, Option } from "../Dropdown";

const ProductOptionSelector = ({
  id,
  label,
  initialOption,
  options,
  onChangeOption,
}: ProductOptionSelectorProps) => {
  const [currentOption, setCurrentOption] = useState<Option>(
    initialOption || null
  );

  const nextAvailableOption = useMemo(() => {
    return options.find((opt) => !opt.option.disabled);
  }, [options]);

  const handleChangeOption = useCallback((selectedOption: Option) => {
    setCurrentOption(selectedOption);
  }, []);

  const handleRemoveValue = useCallback((valueToRemove: string) => {
    setCurrentOption((prev) => ({
      ...prev,
      option: {
        ...prev.option,
        value: prev.option.value.filter((v) => v !== valueToRemove),
      },
    }));
  }, []);

  useEffect(() => {
    if (currentOption.option.value.length === 0) {
      nextAvailableOption;
    }
  }, [currentOption]);

  useEffect(() => {
    onChangeOption?.(currentOption);
  }, [currentOption]);

  useEffect(() => {
    if (initialOption) {
      setCurrentOption(initialOption);
    }
  }, [initialOption]);

  return (
    <div className="flex flex-col gap-4">
      <span className="text-base font-bold text-slate-900">{label}</span>
      <div className="flex items-center gap-6">
        <Dropdown
          label={currentOption.option.label}
          currentOption={currentOption}
          options={options}
          onChange={handleChangeOption}
        />
        {currentOption.option.value.length > 0 && (
          <ProductOptionValues
            label="Value"
            values={currentOption.option.value}
            onRemoveValue={handleRemoveValue}
          />
        )}
      </div>
    </div>
  );
};
export default ProductOptionSelector;
