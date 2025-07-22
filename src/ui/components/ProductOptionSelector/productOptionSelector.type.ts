export type OptionValues={
    option: string;
    values: string[];
}
  
export interface ProductOptionSelectorProps {
  label?: string;
  options: string[]; 
  selectedOption: string;
  onOptionChange: (option: string) => void;
  optionsValues: OptionValues[];
  onRemoveValue: (value: string) => void;
}