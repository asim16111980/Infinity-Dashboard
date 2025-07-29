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
  // const [optionCount, setOptionCount] = useState<number>(1);
  const [selectedOptions, setSelectedOptions] = useState<DropdownOption[]>([
    options[initialOptionIndex],
  ]);

  const handleChangeOption = (id: number, currentOption: DropdownOption) => {
    console.log(currentOption);
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
  

    // if (currentOption.value.length > 0) {
    //   setSelectedOptions((prev) =>
    //     prev.map((option) =>
    //       option.label === currentOption.label
    //         ? { ...option, value: currentOption.value }
    //         : option
    //     )
    //   );z
    // } else {
    //   setSelectedOptions((prev) =>
    //     prev.filter((option) => option.label !== currentOption.label)
    //   );
    // }
    // } else {
    //   setSelectedOptions([...selectedOptions, currentOption]);
    // }
  };

  const addNewOptionSelector = () => {
    const nextOption = options.find((option) => !option.disabled);

    if (nextOption) {
      setSelectedOptions([...selectedOptions, nextOption]);
    }
    // const lastOptionIndex = selectedOptions.length - 1;
    // setSelectedOptions((prev) => [
    //   ...prev,
    //   { ...options[lastOptionIndex], disabled: true },
    // ]);

    // const nextOption: DropdownOption | undefined = options.find(
    //   (option) => !option.disabled
    // );

    // if (nextOption) {
    //   setSelectedOptions((prev) => [...prev, nextOption]);
    //   // setOptionCount((prev) => prev + 1);
    // }
  };
  console.log(options);
  useEffect(() => {
    console.log(options);
    onChangeOptions?.(selectedOptions);
  }, [selectedOptions]);
  // useEffect(() => {
  //   setOptionCount(0);
  //   if (optionsValues.length === 0 && initialOptions.length > 0) {
  //     addNewOptionSelector();
  //   }
  // }, [initialOptions]);

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
