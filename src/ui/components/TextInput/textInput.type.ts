export interface TextInputProps {
  label: string;
  // value: string;
  // onChange: (value: string) => void;
  onKeyDown?: (value: string) => boolean;
  placeholder?: string;
  className?: string;
}
