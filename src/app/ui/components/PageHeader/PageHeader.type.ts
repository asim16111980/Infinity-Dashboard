import { JSX } from "react";
import { ButtonProps,LinkButtonProps } from "../Button/button.type";

export interface PageHeaderProps {
  title: string;
  regularButton?: ButtonProps;
  linkButton?: LinkButtonProps;
}
