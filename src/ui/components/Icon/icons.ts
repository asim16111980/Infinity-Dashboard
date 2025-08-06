import {
  Plus,
  ArrowLeft,
  Edit,
  Trash,
  Pencil,
  ArrowRight,
  Home,
  Tag,
  X,
  Folder,
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
  x: X,
  folder: Folder,
} as const;

export type IconName = keyof typeof ICONS_MAP;
