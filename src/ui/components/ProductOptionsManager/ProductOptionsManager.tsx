"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
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

  const nextAvailableOption = useMemo(() => {
    return options.find((option) => !option.disabled);
  }, [options]);

  const handleChangeOption = useCallback(
    (id: number, currentOption: DropdownOption) => {
      if (currentOption.value.length !== 0) {
        setSelectedOptions((prev) =>
          prev.map((option, index) => (index === id ? currentOption : option))
        );
      } else {
        if (options.length === selectedOptions.length) {
          setSelectedOptions((prev) => prev.filter((_, index) => id !== index));
        } else {
          setSelectedOptions((prev) =>
            prev
              .map((selected, index) =>
                id !== index ? selected : nextAvailableOption
              )
              .filter((option): option is DropdownOption => option !== null)
          );
        }
      }
    },
    [options, selectedOptions]
  );

  const addNewOptionSelector = useCallback(() => {
    nextAvailableOption;
    if (nextAvailableOption) {
      setSelectedOptions([...selectedOptions, nextAvailableOption]);
    }
  }, [options, selectedOptions]);

  const updatedOptions = useMemo(() => {
    return options.map((option) =>
      selectedOptions.some((selected) => option.label === selected.label)
        ? { ...option, disabled: true }
        : { ...option, disabled: false }
    );
  }, [selectedOptions]);

  useEffect(() => {
    setOptions(updatedOptions);
  }, [updatedOptions]);

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
