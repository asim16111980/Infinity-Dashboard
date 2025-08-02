"use client";

import { useEffect, useState } from "react";
import RegularButton from "../Button/RegularButton";
import ProductOptionSelector from "../ProductOptionSelector";
import { ProductOptionsManagerProps } from "./productOptionsManager.type";
import { DropdownOption } from "../Dropdown";

const ProductOptionsManager = ({
  initialOptions,
  initialOptionIndex,
  onChangeOptions,
}: ProductOptionsManagerProps) => {
  const [options, setOptions] = useState<DropdownOption[]>(initialOptions);
  const [selectedOptions, setSelectedOptions] = useState<DropdownOption[]>([
    options[initialOptionIndex],
  ]);

  const handleChangeOption = (id: number, currentOption: DropdownOption) => {
    console.log(`Current option changed for ${id}:`, currentOption);

    // setSelectedOptions(selectedOptions);
    if (currentOption.value.length !== 0) {
      setSelectedOptions((prev) =>
        prev.map((option, index) => {
          return index === id ? currentOption : option;
        })
      );
    } else {
      if (options.length === selectedOptions.length) {
        console.log("Removing option at index:", id);
        const d = selectedOptions.filter((_, index) => id !== index);
        console.log("Filtered options:", d);

        setSelectedOptions((prev) => prev.filter((_, index) => id !== index));
      } else {
        setSelectedOptions((prev) =>
          prev
            .map((selected, index) =>
              id !== index
                ? selected
                : options.find((option) => !option.disabled)
            )
            .filter((option): option is DropdownOption => option !== null)
        );
      }
    }

    //     return currentOption.value.length !== 0

    //       : options.find((option) => !option.disabled);
    //   }

    // })
    // .filter((option): option is DropdownOption => option !== null)
    // );
  };

  const addNewOptionSelector = () => {
    const nextOption = options.find((option) => !option.disabled);

    if (nextOption) {
      setSelectedOptions([...selectedOptions, nextOption]);
    }
  };

  useEffect(() => {
    console.log("Selected options changed:", selectedOptions);
    setOptions(
      options.map((option) =>
        selectedOptions.some((selected) => option.label === selected.label)
          ? { ...option, disabled: true }
          : { ...option, disabled: false }
      )
    );
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
