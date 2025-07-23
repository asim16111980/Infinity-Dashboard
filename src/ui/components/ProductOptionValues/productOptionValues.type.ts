export interface ProductOptionValuesProps {
  label?: string;
  selectedOption: string;
  initialValues: string[];
  className?: string;
  onRemoveValue?: (selectedOption: string, value: string) => void;
}
