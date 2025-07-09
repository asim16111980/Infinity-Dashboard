import { ButtonProps } from "./Button.type";

const RegularButton = ({ title, className, onClick }: ButtonProps) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default RegularButton;
