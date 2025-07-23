import { DropdownOption } from "../Dropdown";
export interface ProductOptionSelectorProps {
  label?: string;
  initialOption: DropdownOption;
  optionsValues: DropdownOption[];
  // options: string[];
  // selectedOption: string;
  // onOptionChange: (option: string) => void;
  onRemoveValue: (selectedOption: string, value: string) => void;
}
