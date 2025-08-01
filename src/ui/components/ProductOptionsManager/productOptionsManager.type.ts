import { DropdownOption } from "../Dropdown";

export interface ProductOptionsManagerProps {
  initialOptions: DropdownOption[];
  initialOptionIndex: number;
  onChangeOptions: (selectedOptions: DropdownOption[]) => void;
}
