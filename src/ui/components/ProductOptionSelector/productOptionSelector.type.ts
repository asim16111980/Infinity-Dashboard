export type OptionValues = {
  option: string;
  values: string[];
};

export interface ProductOptionSelectorProps {
  label?: string;
  optionsValues: OptionValues[];
  // options: string[];
  // selectedOption: string;
  // onOptionChange: (option: string) => void;
  onRemoveValue: (selectedOption: string, value: string) => void;
}
