import { ICONS_MAP } from "../Icon/icons";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  // value: string;
  // onChange: (value: string) => void;
  onEnterValue?: (value: string) => boolean;
  showPassword?:boolean
  error?: boolean;
  helperText?: string;
  // className?: string;
}
