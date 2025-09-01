export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  // value: string;
  // onChange: (value: string) => void;
  onEnterValue?: (value: string) => boolean;
  // className?: string;
}
