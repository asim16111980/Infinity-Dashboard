"use client";

import { useEffect, useState } from "react";
import RegularButton from "../Button/RegularButton";
import ProductOptionSelector, { OptionValues } from "../ProductOptionSelector";
import { ProductOptionsManagerProps } from "./productOptionsManager.type";

const ProductOptionsManager = ({
  initialOptions,
}: ProductOptionsManagerProps) => {
  const [optionCount, setOptionCount] = useState<number>(0);
  const [optionsValues, setOptionsValues] = useState<OptionValues[]>([]);

  const handleRemoveValue = (selectedOption: string, value: string) => {
    setOptionsValues((prev) =>
      prev.map((optionValue) =>
        optionValue.option === selectedOption
          ? {
              ...optionValue,
              values: optionValue.values.filter((v: string) => v !== value),
            }
          : optionValue
      )
    );
  };

  const addNewOptionSelector = () => {
    const nextOption: OptionValues = initialOptions.find(
      (option) => !optionsValues.some((ov) => ov.option === option.option)
    );

    if (nextOption) {
      setOptionsValues((prev) => [...prev, nextOption]);
      setOptionCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (optionsValues.length === 0 && initialOptions.length > 0) {
      addNewOptionSelector();
    }
  }, [initialOptions]);

  return (
    <div className="w-full flex flex-col gap-4">
      {optionCount > 0 && (
        <ProductOptionSelector
          label={`Option ${optionCount}`}
          initialOption={optionsValues[0]}
          options={initialOptions}
          onRemoveValue={handleRemoveValue}
        />
      )}
      <RegularButton title="add more" onClick={addNewOptionSelector} />
    </div>
  );
};

export default ProductOptionsManager;
