import { DropdownOption } from "../Dropdown";

export interface ProductOptionValuesProps {
  label?: string;
  // optionValues?: string|string[];
  selectedOption: DropdownOption;
  className?: string;
  onRemoveValue?: (selectedOption: string, value: string) => void;
}
