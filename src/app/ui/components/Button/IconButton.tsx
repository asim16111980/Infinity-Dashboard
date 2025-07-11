import { ButtonProps } from "./button.type";

const IconButton = ({ title, icon, className, onClick }: ButtonProps) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {icon && icon}
      <span>{title}</span>
    </button>
  );
};

export default IconButton;
