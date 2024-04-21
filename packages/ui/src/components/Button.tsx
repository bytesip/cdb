import { ButtonHTMLAttributes, FC } from "react";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonRadius = "square" | "rounded";
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "text"
  | "text-warn"
  | "text-sky"
  | "warn"
  | "blue";

type ButtonProps = {};

export const Button: FC<ButtonProps> = ({ ...props }) => {
  return <div>test</div>;
};
