import { DropdownOption } from "../Dropdown";
export interface ProductOptionSelectorProps {
  label?: string;
  initialOption: DropdownOption;
  options: DropdownOption[];
  onChangeOption: (option: DropdownOption) => void;
}
