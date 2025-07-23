import { useState } from "react";
import { ProductOptionSelectorProps } from "./productOptionSelector.type";
import Dropdown from "../Dropdown/Dropdown";
import ProductOptionValues from "../ProductOptionValues";

const ProductOptionSelector = ({
  label,
  optionsValues,
  onRemoveValue,
}: ProductOptionSelectorProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChangeOption = (selectedItem: string) => {
    setSelectedOption(selectedItem);
  };

  const foundOptionValues = optionsValues.find(
    ({ option }) => option === selectedOption
  );

  const handleRemoveValue = (value: string) => {
    if (selectedOption && onRemoveValue) {
      onRemoveValue(selectedOption, value);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-slate-600">{label}</label>
      <Dropdown
        label="Select Option"
        title={selectedOption || "Select an option"}
        items={optionsValues.map((optionValue) => optionValue.option)}
        onChange={handleChangeOption}
      />
      <label className="text-sm text-slate-600">Values</label>
      {foundOptionValues && (
        <ProductOptionValues
          label="Values"
          initialValues={foundOptionValues.values}
          selectedOption={selectedOption}
          onRemoveValue={handleRemoveValue}
        />
      )}
    </div>
  );
};
export default ProductOptionSelector;
