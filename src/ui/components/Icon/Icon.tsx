import { IconProps } from "./icon.type";
import { ICONS_MAP } from "./icons";

const Icon = ({ name, className }: IconProps) => {
  const IconComponent = ICONS_MAP[name];
  
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

export default Icon;
