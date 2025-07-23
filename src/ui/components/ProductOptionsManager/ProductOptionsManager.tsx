"use client";

import { useState } from "react";
import RegularButton from "../Button/RegularButton";
import ProductOptionSelector, { OptionValues } from "../ProductOptionSelector";
import { ProductOptionsManagerProps } from "./productOptionsManager.type";

const ProductOptionsManager = ({
  initialOptionsValues,
}: ProductOptionsManagerProps) => {
  const [optionCount, setOptionCount] = useState<number>(1);
  const [optionsValues, setOptionsValues] =
    useState<OptionValues[]>([]);

  const handleRemoveValue = (selectedOption: string, value: string) => {
    setOptionsValues((prev) =>
      prev.map((optionValue) =>
        optionValue.option === selectedOption
          ? {
              ...optionValue,
              values: optionValue.values.filter((v) => v !== value),
            }
          : optionValue
      )
    );
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {optionCount > 0 && (
        <ProductOptionSelector
          label={`Option ${optionCount}`}
          initialOption={optionsValues[0]}
          optionsValues={initialOptionsValues}
          onRemoveValue={handleRemoveValue}
        />
      )}
      <RegularButton
        title="add more"
        onClick={() => setOptionCount(optionCount + 1)}
      />
    </div>
  );
};

export default ProductOptionsManager;
