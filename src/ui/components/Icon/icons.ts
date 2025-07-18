import {
  Plus,
  ArrowLeft,
  Edit,
  Trash,
  Pencil,
  ArrowRight,
  Home,
  Tag,
} from "lucide-react";

export const ICONS_MAP = {
  plus: Plus,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  edit: Edit,
  pencil: Pencil,
  trash: Trash,
  home: Home,
  tag: Tag,
} as const;

export type IconName = keyof typeof ICONS_MAP;
