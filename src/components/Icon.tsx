import { ICONS } from "@/constants/icons";
import { IconRendererProps } from "@/types/icons";


const Icon = ({ name, className }: IconRendererProps) => {
  const IconComponent = ICONS[name];
  return <IconComponent className={className} />;
};

export default Icon;