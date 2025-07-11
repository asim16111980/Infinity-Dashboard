import { JSX } from "react";
import { ButtonProps } from "../Button/button.type";

export interface PageHeaderProps {
  title: string;
  regularButton?: ButtonProps;
  iconButton?: ButtonProps;
}
