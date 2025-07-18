import { ButtonProps } from "../Button/button.type";

export interface PageHeaderProps {
  title: string;
  regularButtons?: ButtonProps[];
  backButton?: boolean;
}
