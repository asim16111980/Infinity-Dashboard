"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import RegularButton from "../Button/RegularButton";
import ProductOptionSelector from "../ProductOptionSelector";
import {
  ProductOptionsManagerProps,
  EssentialOption,
} from "./productOptionsManager.type";
import { Option } from "../Dropdown";

const ProductOptionsManager = ({
  initialOptions,
  initialOptionIndex,
  onChangeOptions,
}: ProductOptionsManagerProps) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([
    initialOptions[initialOptionIndex],
  ]);

  const updatedOptions = useMemo(() => {
    return initialOptions.map((opt) =>
      selectedOptions.some((selected) => selected.id === opt.id)
        ? { ...opt, selected: true }
        : { ...opt, selected: false }
    );
  }, [selectedOptions, initialOptions]);

  const nextAvailableOption = useMemo(() => {
    return updatedOptions.find((option) => !option.selected);
  }, [updatedOptions]);

  const handleChangeOption = useCallback(
    (selectorId: number, currentOption: Option) => {
      if (currentOption.value.length > 0) {
        setSelectedOptions((prev) =>
          prev.map((selected, index) =>
            index === selectorId ? currentOption : selected
          )
        );
      } else {
        if (selectedOptions.length === initialOptions.length) {
          setSelectedOptions((prev) =>
            prev.filter((_, index) => index !== selectorId)
          );
        } else {
          setSelectedOptions((prev) =>
            prev
              .map((selected, index) =>
                index === selectorId && nextAvailableOption
                  ? nextAvailableOption
                  : selected
              )
              .filter((opt): opt is Option => opt !== null)
          );
        }
      }
    },
    [selectedOptions, nextAvailableOption]
  );

  const addNewOptionSelector = useCallback(() => {
    if (nextAvailableOption) {
      setSelectedOptions((prev) => [...prev, nextAvailableOption]);
    }
  }, [nextAvailableOption]);

  const extractEssentialOptions = useCallback(
    (options: Option[]): EssentialOption[] => {
      return options.map(({ id, label, value }) => ({ id, label, value }));
    },
    [selectedOptions]
  );

  useEffect(() => {
    onChangeOptions?.(extractEssentialOptions(selectedOptions));
  }, [selectedOptions]);

  return (
    <div className="w-full flex flex-col items-start gap-6 py-2">
      {selectedOptions.map((option, index) => (
        <ProductOptionSelector
          id={index}
          key={index}
          label={`Option ${index + 1}`}
          initialOption={option}
          options={updatedOptions}
          onChangeOption={handleChangeOption}
        />
      ))}
      <RegularButton
        variant="custom"
        title="add more"
        onClick={addNewOptionSelector}
        disabled={selectedOptions.length === initialOptions.length}
        className="w-fit text-blue-600 bg-transparent"
      />
    </div>
  );
};

export default ProductOptionsManager;
