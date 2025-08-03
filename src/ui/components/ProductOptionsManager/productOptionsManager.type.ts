import { Option } from "../Dropdown";
export interface ProductOptionsManagerProps {
  initialOptions: Option[];
  initialOptionIndex: number;
  onChangeOptions: (selectedOptions: Option[]) => void;
}
