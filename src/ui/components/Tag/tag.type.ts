export interface TagProps {
  id: number;
  title: string;
  onRemoveValue?: (id: number) => void;
}
