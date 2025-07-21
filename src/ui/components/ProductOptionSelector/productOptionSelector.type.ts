export interface ProductOptionSelectorProps {
    options: string[]; 
    selectedOption: string;
    onOptionChange: (option: string) => void;
    values: string[];
    onRemoveValue: (value: string) => void;
  }

export interface ProductOptionValues{
    option: string;
    values: string[];
  }