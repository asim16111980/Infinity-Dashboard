import { DropdownOption } from "../Dropdown";

export interface ProductOptionValuesProps {
  label?: string;
  initialValues: string[];
  className?: string;
  onRemoveValue?: (values: string[]) => void;
}
