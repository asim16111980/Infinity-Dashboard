"use client";

import { useEffect, useState } from "react";
import RegularButton from "../Button/RegularButton";
import ProductOptionSelector from "../ProductOptionSelector";
import { ProductOptionsManagerProps } from "./productOptionsManager.type";
import { DropdownOption } from "../Dropdown";

const ProductOptionsManager = ({
  options,
  initialOptionIndex,
  onChangeOptions,
}: ProductOptionsManagerProps) => {
  const [selectedOptions, setSelectedOptions] = useState<DropdownOption[]>([
    options[initialOptionIndex],
  ]);

  const handleChangeOption = (id: number, currentOption: DropdownOption) => {
    setSelectedOptions((prev) =>
      prev
        .map((option, index) => {
          if (index === id) {
            return currentOption.value.length !== 0 ? currentOption : null;
          }
          return option;
        })
        .filter((option): option is DropdownOption => option !== null)
    );
  };

  const addNewOptionSelector = () => {
    const nextOption = options.find((option) => !option.disabled);

    if (nextOption) {
      setSelectedOptions([...selectedOptions, nextOption]);
    }
  };

  useEffect(() => {
    onChangeOptions?.(selectedOptions);
  }, [selectedOptions]);

  return (
    <div className="w-full flex flex-col items-start gap-4">
      {selectedOptions.map((_, index) => (
        <ProductOptionSelector
          id={index}
          key={index}
          label={`Option ${index + 1}`}
          initialOption={selectedOptions[index]}
          options={options}
          onChangeOption={handleChangeOption}
        />
      ))}
      <RegularButton
        title="add more"
        onClick={addNewOptionSelector}
        disabled={selectedOptions.length === options.length}
        className="text-blue-600"
      />
    </div>
  );
};

export default ProductOptionsManager;
