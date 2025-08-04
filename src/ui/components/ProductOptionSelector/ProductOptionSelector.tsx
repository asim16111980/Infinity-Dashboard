"use client";

import { useCallback, useEffect, useState } from "react";
import { ProductOptionSelectorProps } from "./productOptionSelector.type";
import Dropdown from "../Dropdown/Dropdown";
import ProductOptionValues from "../ProductOptionValues";
import { Option } from "../Dropdown";

const ProductOptionSelector = ({
  id,
  label,
  initialOption,
  options,
  onChangeOption,
}: ProductOptionSelectorProps) => {
  const [currentOption, setCurrentOption] = useState<Option>(initialOption);

  const handleChangeOption = useCallback((selectedOption: Option) => {
    setCurrentOption(selectedOption);
  }, []);

  const handleRemoveValue = useCallback((valueToRemove: string) => {
    setCurrentOption((prev) => ({
      ...prev,
      value: prev.value.filter((v) => v !== valueToRemove),
    }));
  }, []);

  useEffect(() => {
    // استدعاء onChangeOption عند تغير currentOption
    onChangeOption?.(currentOption);
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

// "use client";
// import { useCallback, useEffect, useMemo, useState } from "react";
// import { ProductOptionSelectorProps } from "./productOptionSelector.type";
// import Dropdown from "../Dropdown/Dropdown";
// import ProductOptionValues from "../ProductOptionValues";
// import { Option } from "../Dropdown";

// const ProductOptionSelector = ({
//   id,
//   label,
//   initialOption,
//   options,
//   onChangeOption,
// }: ProductOptionSelectorProps) => {
//   const [currentOption, setCurrentOption] = useState<Option>(
//     initialOption || null
//   );

//   const nextAvailableOption = useMemo(() => {
//     return options.find((option) => !option.selected);
//   }, [options]);

//   const handleChangeOption = useCallback((selectedOption: Option) => {
//     setCurrentOption(selectedOption);
//   }, []);

//   const handleRemoveValue = useCallback((valueToRemove: string) => {
//     setCurrentOption((prev) => ({
//       ...prev,
//       value: prev.value.filter((v) => v !== valueToRemove),
//     }));
//   }, []);

//   useEffect(() => {
//     if (currentOption.value.length === 0 && nextAvailableOption) {
//       setCurrentOption(nextAvailableOption);
//     }
//   }, [currentOption, nextAvailableOption]);
  

//   useEffect(() => {
//     onChangeOption?.(currentOption);
//   }, [currentOption]);

//   useEffect(() => {
//     if (initialOption) {
//       setCurrentOption(initialOption);
//     }
//   }, [initialOption]);

//   return (
//     <div className="flex flex-col gap-4">
//       <span className="text-base font-bold text-slate-900">{label}</span>
//       <div className="flex items-center gap-6">
//         <Dropdown
//           label={currentOption.label}
//           currentOption={currentOption}
//           options={options}
//           onChange={handleChangeOption}
//         />
//         {currentOption.value.length > 0 && (
//           <ProductOptionValues
//             label="Value"
//             values={currentOption.value}
//             onRemoveValue={handleRemoveValue}
//           />
//         )}
//       </div>
//     </div>
//   );
// };
// export default ProductOptionSelector;
