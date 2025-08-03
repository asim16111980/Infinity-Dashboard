export type DropdownOption = {
  label: string;
  value: string[];
  disabled: boolean;
};

export type Option = {
  id: number;
  option: DropdownOption;
};
export interface DropdownProps {
  label?: string;
  title?: string;
  currentOption?: Option;
  options: Option[];
  className?: string;
  onChange?: (option: Option) => void;
}
