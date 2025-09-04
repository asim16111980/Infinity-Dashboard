import React from "react";
export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checkboxClasses?: string;
  labelClasses?: string;
  titleClasses?: string;
}
