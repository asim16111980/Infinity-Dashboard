"use client";

import { useEffect, useState } from "react";
import RegularButton from "../Button/RegularButton";
import ProductOptionSelector from "../ProductOptionSelector";
import { ProductOptionsManagerProps } from "./productOptionsManager.type";
import { DropdownOption } from "../Dropdown";

const ProductOptionsManager = ({
  options,
  initialOptionIndex,
}: ProductOptionsManagerProps) => {
  // const [optionCount, setOptionCount] = useState<number>(1);
  const [selectedOptions, setSelectedOptions] = useState<DropdownOption[]>([
    options[initialOptionIndex],
  ]);

  const handleChangeOption = (id: number, currentOption: DropdownOption) => {
    // const isExit = selectedOptions.some(
    //   (option) => option.label === currentOption.label
    // );
    // if (isExit) {
    console.log(id, currentOption);

    setSelectedOptions((prev) =>
      prev.map((option, index) => (index === id ? currentOption : option))
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
    setSelectedOptions(
      selectedOptions.map((option, index) =>
        index === selectedOptions.length - 1
          ? { ...option, disabled: true }
          :option
      )
    );
    
    const nextOptionIndex =
      options.findIndex(
        (option) =>
          option.label === selectedOptions[selectedOptions.length - 1].label &&
          !option.disabled
      ) + 1;

    if (nextOptionIndex < options.length) { 
      setSelectedOptions([...selectedOptions, { ...options[nextOptionIndex] }]);
    } else {
      const nextOption = options.find((option) => !option.disabled);
      if (nextOption) setSelectedOptions([...selectedOptions, nextOption]);
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
        className="text-blue-600"
      />
    </div>
  );
};

export default ProductOptionsManager;
