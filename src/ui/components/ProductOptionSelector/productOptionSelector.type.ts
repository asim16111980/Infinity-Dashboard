import { DropdownOption } from "../Dropdown";
export interface ProductOptionSelectorProps {
  id: number;
  label?: string;
  initialOption: DropdownOption;
  options: DropdownOption[];
  onChangeOption: (id: number, option: DropdownOption) => void;
}
