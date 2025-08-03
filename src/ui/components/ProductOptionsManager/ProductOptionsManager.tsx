"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import RegularButton from "../Button/RegularButton";
import ProductOptionSelector from "../ProductOptionSelector";
import { ProductOptionsManagerProps } from "./productOptionsManager.type";
import { Option } from "../Dropdown";

const ProductOptionsManager = ({
  initialOptions,
  initialOptionIndex,
  onChangeOptions,
}: ProductOptionsManagerProps) => {
  const [options, setOptions] = useState<Option[]>(initialOptions);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([
    options[initialOptionIndex],
  ]);

  const nextAvailableOption = useMemo(() => {
    return options.find((opt) => !opt.option.disabled);
  }, [options]);

  const handleChangeOption = useCallback(
    (currentOption: Option) => {
      if (currentOption.option.value.length !== 0) {
        setSelectedOptions((prev) =>
          prev.map((option) =>
            option.id === currentOption.id ? option : currentOption
          )
        );
      } else {
        if (options.length === selectedOptions.length) {
          setSelectedOptions((prev) =>
            prev.filter((option) => currentOption.id !== option.id)
          );
        } else {
          setSelectedOptions((prev) =>
            prev
              .map((selected) =>
                selected.id !== currentOption.id
                  ? selected
                  : nextAvailableOption
              )
              .filter((option): option is Option => option !== null)
          );
        }
      }
    },
    [options, selectedOptions]
  );

  const addNewOptionSelector = useCallback(() => {
    const u = nextAvailableOption;
    console.log(u);
    
    if (nextAvailableOption) {
      setSelectedOptions([...selectedOptions, nextAvailableOption]);
      console.log(selectedOptions);
    }
  }, [options, selectedOptions]);

  const updatedOptions = useMemo(() => {
    return options.map((opt) =>
      selectedOptions.some((selected) => selected.id === opt.id)
        ? { ...opt, option: { ...opt.option, disabled: true } }
        : { ...opt, option: { ...opt.option, disabled: false } }
    );
  }, [selectedOptions]);

  useEffect(() => {
    setOptions(updatedOptions);
  }, [updatedOptions]);

  useEffect(() => {
    const o = options.map((opt) =>
      selectedOptions.some((selected) => selected.id === opt.id)
        ? { ...opt, option: { ...opt.option, disabled: true } }
        : { ...opt, option: { ...opt.option, disabled: false } }
    );
    console.log(selectedOptions);
    console.log(o);

    onChangeOptions?.(selectedOptions);
  }, [selectedOptions]);

  return (
    <div className="w-full flex flex-col items-start gap-4">
      {selectedOptions.map((option) => (
        <ProductOptionSelector
          id={option.id}
          key={option.id}
          label={`Option ${option.id + 1}`}
          initialOption={option}
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
