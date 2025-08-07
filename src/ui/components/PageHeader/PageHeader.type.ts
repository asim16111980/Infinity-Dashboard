import { ButtonProps } from "../Button/button.type";
import { CustomLinkProps } from "../CustomLink";

export interface PageHeaderProps {
  title: string;
  buttons?: ButtonProps[];
  links?: CustomLinkProps[];
  backButton?: boolean;
}
