"use client";

import { useEffect, useState } from "react";
import RegularButton from "../Button/RegularButton";
import ProductOptionSelector, { OptionValues } from "../ProductOptionSelector";
import { ProductOptionsManagerProps } from "./productOptionsManager.type";
import { DropdownOption } from "../Dropdown";

const ProductOptionsManager = ({ options }: ProductOptionsManagerProps) => {
  const [optionCount, setOptionCount] = useState<number>(1);
  const [selectedOptions, setSelectedOptions] = useState<DropdownOption[]>([]);

  const handleRemoveValue = (currentOption: DropdownOption) => {
    const isExit = selectedOptions.some(
      (option) => option.label === currentOption.label
    );
    if (isExit) {
      if (currentOption.value.length > 0) {
        setSelectedOptions((prev) =>
          prev.map((option) =>
            option.label === currentOption.label
              ? { ...option, value: currentOption.value }
              : option
          )
        );
      } else {
        setSelectedOptions((prev) =>
          prev.filter((option) => option.label !== currentOption.label)
        );
      }
    } else {
      setSelectedOptions([...selectedOptions, currentOption]);
    }
  };

  const addNewOptionSelector = () => {
    const nextOption: DropdownOption|undefined = options.find(
      (option) => !selectedOptions.some((ov) => ov.label === option.label)
    );

    if (nextOption) {
      // setOptionsValues((prev) => [...prev, nextOption]);
      setOptionCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);
  // useEffect(() => {
  //   setOptionCount(0);
  //   if (optionsValues.length === 0 && initialOptions.length > 0) {
  //     addNewOptionSelector();
  //   }
  // }, [initialOptions]);

  return (
    <div className="w-full flex flex-col items-start gap-4">
      {optionCount > 0 && (
      <ProductOptionSelector
        label={`Option ${optionCount}`}
        initialOption={options[0]}
        options={options}
        onChangeOption={handleRemoveValue}
      />
      )} 
      <RegularButton title="add more" onClick={addNewOptionSelector} className="text-blue-600" />
    </div>
  );
};

export default ProductOptionsManager;
