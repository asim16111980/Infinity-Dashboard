export interface DropdownProps {
  label?: string;
  title: string;
  items: string[];
  className?: string;
  onChange?: (selectedItem: string, index: number) => void;
}
