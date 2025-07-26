import { DropdownOption } from "../Dropdown";

export interface ProductOptionValuesProps {
  label?: string;
  values: string[];
  className?: string;
  onRemoveValue?: (value: string) => void;
}
