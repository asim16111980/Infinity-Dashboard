import { Option } from "../Dropdown";

export type EssentialOption = Pick<Option, "id" | "label" | "value">;
export interface ProductOptionsManagerProps {
  initialOptions: Option[];
  initialOptionIndex: number;
  onChangeOptions: (selectedOptions: EssentialOption[]) => void;
}
