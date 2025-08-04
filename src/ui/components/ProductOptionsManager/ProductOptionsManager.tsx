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
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([
    initialOptions[initialOptionIndex],
  ]);

  const updatedOptions = useMemo(() => {
    return initialOptions.map((opt) =>
      selectedOptions.some((selected) => selected.id === opt.id)
        ? { ...opt, disabled: true }
        : { ...opt, disabled: false }
    );
  }, [selectedOptions, initialOptions]);

  const nextAvailableOption = useMemo(() => {
    return updatedOptions.find((option) => !option.disabled);
  }, [updatedOptions]);

  const handleChangeOption = useCallback(
    (currentOption: Option) => {
      if (currentOption.value.length > 0) {
        setSelectedOptions((prev) =>
          prev.map((selected) =>
            selected.id === currentOption.id ? currentOption : selected
          )
        );
      } else {
        if (selectedOptions.length === initialOptions.length) {
          setSelectedOptions((prev) =>
            prev.filter((option) => option.id !== currentOption.id)
          );
        } else {
          setSelectedOptions((prev) =>
            prev
              .map((selected) =>
                selected.id === currentOption.id && nextAvailableOption
                  ? nextAvailableOption
                  : selected
              )
              .filter((opt): opt is Option => opt !== null)
          );
        }
      }
    },
    [selectedOptions, nextAvailableOption, initialOptions.length]
  );

  const addNewOptionSelector = useCallback(() => {
    if (nextAvailableOption) {
      setSelectedOptions((prev) => [...prev, nextAvailableOption]);
    }
  }, [nextAvailableOption]);

  useEffect(() => {
    onChangeOptions?.(selectedOptions);
  }, [selectedOptions]);

  return (
    <div className="w-full flex flex-col items-start gap-4">
      {selectedOptions.map((option,index) => (
        <ProductOptionSelector
          key={option.id}
          id={option.id}
          label={`Option ${index + 1}`}
          initialOption={option}
          options={updatedOptions}
          onChangeOption={handleChangeOption}
        />
      ))}
      <RegularButton
        title="add more"
        onClick={addNewOptionSelector}
        disabled={selectedOptions.length === initialOptions.length}
        className="text-blue-600"
      />
    </div>
  );
};

export default ProductOptionsManager;


// "use client";
// import { useCallback, useEffect, useMemo, useState } from "react";
// import RegularButton from "../Button/RegularButton";
// import ProductOptionSelector from "../ProductOptionSelector";
// import { ProductOptionsManagerProps } from "./productOptionsManager.type";
// import { Option } from "../Dropdown";

// const ProductOptionsManager = ({
//   initialOptions,
//   initialOptionIndex,
//   onChangeOptions,
// }: ProductOptionsManagerProps) => {
//   const [options, setOptions] = useState<Option[]>(initialOptions);
//   const [selectedOptions, setSelectedOptions] = useState<Option[]>([
//     options[initialOptionIndex],
//   ]);

//   const nextAvailableOption = useMemo(() => {
//     return options.find((option) => !option.selected);
//   }, [options]);

  
//   const updatedOptions = useMemo(() => {
//     return options.map((option) =>
//       selectedOptions.some((selected) => selected.id === option.id)
//         ? { ...option, disabled: true }
//         : { ...option, disabled: false }
//     );
//   }, [selectedOptions]);
  
//   const addNewOptionSelector = useCallback(() => {
//     if (nextAvailableOption) {
//       setSelectedOptions((prev) => [...prev, nextAvailableOption]);
//     }
//   }, [nextAvailableOption]);

//   const handleChangeOption = useCallback(
//     (currentOption: Option) => {
//       if (currentOption.value.length !== 0) {
//         setSelectedOptions((prev) =>
//           prev.map((selected) =>
//             selected.id === currentOption.id ? selected : currentOption
//           )
//         );
//       } else {
//         if (options.length === selectedOptions.length) {
//           setSelectedOptions((prev) =>
//             prev.filter((option) => currentOption.id !== option.id)
//           );
//         } else {
//           setSelectedOptions((prev) =>
//             prev
//               .map((selected) =>
//                 selected.id !== currentOption.id
//                   ? selected
//                   : nextAvailableOption
//               )
//               .filter((option): option is Option => option !== null)
//           );
//         }
//       }
//     },
//     [options, selectedOptions]
//   );

//   useEffect(() => {
//     setOptions(updatedOptions);
//   }, [updatedOptions]);

//   useEffect(() => {
//     onChangeOptions?.(selectedOptions);
//   }, [selectedOptions]);

//   return (
//     <div className="w-full flex flex-col items-start gap-4">
//       {selectedOptions.map((option) => (
//         <ProductOptionSelector
//           id={option.id}
//           key={option.id}
//           label={`Option ${option.id + 1}`}
//           initialOption={option}
//           options={options}
//           onChangeOption={handleChangeOption}
//         />
//       ))}
//       <RegularButton
//         title="add more"
//         onClick={addNewOptionSelector}
//         disabled={selectedOptions.length === options.length}
//         className="text-blue-600"
//       />
//     </div>
//   );
// };

// export default ProductOptionsManager;
