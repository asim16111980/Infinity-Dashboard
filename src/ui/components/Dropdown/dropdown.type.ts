export type Value = {
  id: number;
  title: string;
};

export type Option = {
  id: number;
  label: string;
  value: Value[];
  selected: boolean;
};
export interface DropdownProps {
  label?: string;
  title?: string;
  currentOption?: Option;
  options: Option[];
  className?: string;
  onChange?: (option: Option) => void;
}
