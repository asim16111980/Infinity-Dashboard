import clsx from "clsx";
import { ButtonProps } from "./button.type";
import LucideIcon from "../LucideIcon/LucideIcon";
const RegularButton = ({...props}: ButtonProps) => {
  const {
    asChild = false,
    href,
    variant = "primary",
    title,
    lucideIcon,
    iconClassName,
    className,
    onClick,
  } = props ;
  const Comp = asChild ? "span" : "button";
  return (
    <Comp
    type={asChild ? undefined : variant === "primary" ? "submit" : "button"}
      className={clsx("flex items-center justify-center capitalize", className)}
      onClick={!asChild ? onClick : undefined}
    >
      {lucideIcon && <LucideIcon lucideIcon={lucideIcon} className={iconClassName} />}
      <span>{title}</span>
    </Comp>
  );
};

export default RegularButton;