import { Option } from "../Dropdown";
export interface ProductOptionSelectorProps {
  id: number;
  label?: string;
  initialOption: Option;
  options: Option[];
  onChangeOption: (id: number, option: Option) => void;
}
