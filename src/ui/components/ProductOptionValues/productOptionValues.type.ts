export interface ProductOptionValuesProps {
  label?: string;
  optionValues?: string|string[];
  initialValues: string[];
  className?: string;
  onRemoveValue?: (selectedOption: string, value: string) => void;
}
