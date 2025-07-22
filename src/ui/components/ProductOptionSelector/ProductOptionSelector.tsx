"use client";

import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import {
  ProductOptionSelectorProps,
  OptionValues,
} from "./productOptionSelector.type";
import ProductOptionValues from "../ProductOptionValues/ProductOptionValues";

const ProductOptionSelector = ({
  label,
  options,
  selectedOption,
  onOptionChange,
  optionsValues,
  onRemoveValue,
}: ProductOptionSelectorProps) => {
  const [optionValues, setOptionValues] = useState<OptionValues>({
    option: "",
    values: [],
  });

  const handleChangeOption = (selectedItem: string) => {
    const found = optionsValues.find(({ option }) => option === selectedItem);

    if (found) {
      setOptionValues({ option: selectedItem, values: found.values });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-slate-600">{label}</label>
      <Dropdown
        label="size"
        title="size"
        items={["size", "color"]}
        // onChange={}
      />
      <label className="text-sm text-slate-600">Values</label>
      <ProductOptionValues label="value" initialValues={optionValues.values} />
    </div>
  );
};
