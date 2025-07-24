import { DropdownOption } from "../Dropdown";
export interface ProductOptionSelectorProps {
  label?: string;
  initialOption: DropdownOption;
  options: DropdownOption[];
  onRemoveValue: (selectedOption: string, value: string) => void;
}
