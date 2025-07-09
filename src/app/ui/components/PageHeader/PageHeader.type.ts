import { JSX } from "react";
import { ButtonProps } from "../Button/Button.type";

export interface PageHeaderProps{
    title: string;
    regularButton?: ButtonProps ;
    iconButton?: JSX.Element;
}