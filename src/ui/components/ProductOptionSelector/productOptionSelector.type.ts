import { DropdownOption } from "../Dropdown";
import { Option } from "../Dropdown";
export interface ProductOptionSelectorProps {
  id: number;
  label?: string;
  initialOption: Option;
  options: Option[];
  onChangeOption: (option: Option) => void;
}
