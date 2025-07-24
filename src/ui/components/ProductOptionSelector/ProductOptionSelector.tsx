import { useState } from "react";
import { ProductOptionSelectorProps } from "./productOptionSelector.type";
import Dropdown from "../Dropdown/Dropdown";
import ProductOptionValues from "../ProductOptionValues";
import { DropdownOption } from "../Dropdown";

const ProductOptionSelector = ({
  label,
  initialOption,
  options,
  onRemoveValue,
}: ProductOptionSelectorProps) => {
  const [selectedOption, setSelectedOption] =
    useState<DropdownOption>(initialOption);

  const handleChangeOption = (selectedOption: DropdownOption) => {
    setSelectedOption(selectedOption);
  };

  const foundOption = options.find(
    (option) => option.label === selectedOption?.label
  );

  const handleRemoveValue = (value: string) => {
    if (selectedOption.value.length > 0) {
      setSelectedOption((prev) => {
        if (!prev) return prev;
        const newValues = prev.value.filter((v) => v !== value);
        return {
          ...prev,
          value: newValues,
        };
      });
    } else {
      setSelectedOption((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          disabled: false,
        };
      });
    }

    if (selectedOption && onRemoveValue) {
      onRemoveValue(selectedOption.label, value);
    }
  };

  return (
    <label className="flex flex-col gap-4">
      <span className="text-base font-bold text-slate-900">{label}</span>
      <div className="flex items-center gap-6">
        <Dropdown
          label={selectedOption?.label}
          initialOption={initialOption}
          options={options}
          onChange={handleChangeOption}
        />
        {foundOption && (
          <ProductOptionValues
            label="Value"
            selectedOption={selectedOption}
            onRemoveValue={handleRemoveValue}
          />
        )}
      </div>
    </label>
  );
};
export default ProductOptionSelector;
