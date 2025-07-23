import { useState } from "react";
import { ProductOptionSelectorProps } from "./productOptionSelector.type";
import Dropdown from "../Dropdown/Dropdown";
import ProductOptionValues from "../ProductOptionValues";
import { DropdownOption } from "../Dropdown";

const ProductOptionSelector = ({
  label,
  initialOption,
  optionsValues,
  onRemoveValue,
}: ProductOptionSelectorProps) => {
  const [selectedOption, setSelectedOption] =
    useState<DropdownOption>(initialOption);

  const handleChangeOption = (selectedOption: DropdownOption) => {
    setSelectedOption(selectedOption);
  };

  const foundOptionValues = optionsValues.find(
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
          disabled: true,
        };
      });      
    }

    if (selectedOption && onRemoveValue) {
      onRemoveValue(selectedOption.label, value);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-slate-600">{label}</label>
      <Dropdown
        label={selectedOption?.label}
        initialOption={initialOption}
        options={optionsValues}
        onChange={handleChangeOption}
      />
      <label className="text-sm text-slate-600">Value</label>
      {foundOptionValues && (
        <ProductOptionValues
          label="Values"
          // initialValues={foundOptionValues.values}
          optionValues={selectedOption?.value}
          onRemoveValue={handleRemoveValue}
        />
      )}
    </div>
  );
};
export default ProductOptionSelector;
