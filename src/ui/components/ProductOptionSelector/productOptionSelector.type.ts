import { DropdownOption } from "../Dropdown";
export interface ProductOptionSelectorProps {
  label?: string;
  initialOption: DropdownOption;
  initialOptions: DropdownOption[];
  onRemoveValue: (selectedOption: DropdownOption) => void;
}
