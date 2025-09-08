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
  EllipsisVertical,
  Eye,
  EyeOff,
  AlertCircle,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";

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
  ellipsisVertical: EllipsisVertical,
  google: FcGoogle,
  facebook: IoLogoFacebook,
  eye: Eye,
  eyeOff: EyeOff,
  alertCircle: AlertCircle,
} as const;

export type IconName = keyof typeof ICONS_MAP;
