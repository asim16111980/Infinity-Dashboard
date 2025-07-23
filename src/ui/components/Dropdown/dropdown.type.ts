export type DropdownOption = {
  label: string;
  value: string[];
  disabled?: boolean;
}
export interface DropdownProps {
  label?: string;
  title?: string;
  initialOption?: DropdownOption;
  options: DropdownOption[];
  className?: string;
  onChange?: (option:DropdownOption) => void;
}
