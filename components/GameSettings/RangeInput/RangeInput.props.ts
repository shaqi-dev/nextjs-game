import { HTMLAttributes } from "react";

export interface RangeInputProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  width: string;
  options: string[]
}

export interface LabelProps {
  width: string;
}