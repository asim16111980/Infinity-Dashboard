import { DropdownOption } from "../Dropdown";

export interface ProductOptionsManagerProps {
  options: DropdownOption[];
  initialOptionIndex: number;
  onChangeOptions: (selectedOptions: DropdownOption[]) => void;
}
