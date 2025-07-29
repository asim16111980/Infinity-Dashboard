import { useEffect, useState } from "react";
import { ProductOptionSelectorProps } from "./productOptionSelector.type";
import Dropdown from "../Dropdown/Dropdown";
import ProductOptionValues from "../ProductOptionValues";
import { DropdownOption } from "../Dropdown";

const ProductOptionSelector = ({
  id,
  label,
  initialOption,
  options,
  onChangeOption,
}: ProductOptionSelectorProps) => {
  const [currentOption, setCurrentOption] = useState<DropdownOption>(
    initialOption || null
  );

  const handleChangeOption = (selectedOption: DropdownOption) => {
    console.log(selectedOption);

    setCurrentOption(selectedOption);
  };

  const handleRemoveValue = (valueToRemove: string) => {
    setCurrentOption((prev) => ({
      ...prev,
      value: prev.value.filter((v) => v !== valueToRemove),
    }));
  };

  // const handleRemoveValue = (value: string) => {
  //   console.log(value);

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
  // };

  useEffect(() => {
  
    if (currentOption.value.length === 0) {
      const nextOption = options.find((option) => !option.disabled);
      if (nextOption) setCurrentOption(nextOption);
      // console.log(nextOption, currentOption);

      // const currentOptionIndex = options.findIndex(
      //   (option) => option.label === currentOption.label
      // );

      // if (currentOptionIndex < options.length - 1) {
      //   setCurrentOption(options[currentOptionIndex + 1]);
      // } else {
      //   setCurrentOption(options[0]);
      // }
      console.log(currentOption);
    }
    onChangeOption?.(id, currentOption);
  }, [currentOption]);

  return (
    <div className="flex flex-col gap-4">
      <span className="text-base font-bold text-slate-900">{label}</span>
      <div className="flex items-center gap-6">
        <Dropdown
          label={currentOption.label}
          currentOption={currentOption}
          options={options}
          onChange={handleChangeOption}
        />
        {currentOption.value.length > 0 && (
          <ProductOptionValues
            label="Value"
            values={currentOption.value}
            onRemoveValue={handleRemoveValue}
          />
        )}
      </div>
    </div>
  );
};
export default ProductOptionSelector;
