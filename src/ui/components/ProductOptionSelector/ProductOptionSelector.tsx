import { useEffect, useState } from "react";
import { ProductOptionSelectorProps } from "./productOptionSelector.type";
import Dropdown from "../Dropdown/Dropdown";
import ProductOptionValues from "../ProductOptionValues";
import { DropdownOption } from "../Dropdown";

const ProductOptionSelector = ({
  label,
  initialOption,
  initialOptions,
  onRemoveValue,
}: ProductOptionSelectorProps) => {
  const [selectedOption, setSelectedOption] =
    useState<DropdownOption>(initialOption);

  const handleChangeOption = (selectedOption: DropdownOption) => {
    setSelectedOption(selectedOption);
  };

  const handleRemoveValue = (values: string[]) => {
    console.log(values);
    
    // setSelectedOption({ ...selectedOption, value: values });
    // if (selectedOption.value.length > 0) {
    //   setSelectedOption((prev) => {
    //     if (!prev) return prev;
    //     const newValues = prev.value.filter((v) => v !== value);
    //     return {
    //       ...prev,
    //       value: newValues,
    //     };
    //   });
    // } else {
    //   setSelectedOption((prev) => {
    //     if (!prev) return prev;
    //     return {
    //       ...prev,
    //       disabled: false,
    //     };
    //   });
    // }
  };

  // useEffect(() => {
  //   if (selectedOption && onRemoveValue) {
  //     onRemoveValue(selectedOption);
  //   }
  // }, [selectedOption]);

  return (
    <div className="flex flex-col gap-4">
      <span className="text-base font-bold text-slate-900">{label}</span>
      <div className="flex items-center gap-6">
        <Dropdown
          label={selectedOption.label}
          initialOption={initialOption}
          options={initialOptions}
          onChange={handleChangeOption}
        />
        {selectedOption.value.length > 0 && (
          <ProductOptionValues
            label="Value"
            initialValues={selectedOption.value}
            onRemoveValue={handleRemoveValue}
          />
        )}
      </div>
    </div>
  );
};
export default ProductOptionSelector;
