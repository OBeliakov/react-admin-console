import { classNames } from "shared/libs/classNames/classNames";
import st from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { onClick, className, children, theme, ...restProps } = props;
  return (
    <button
      onClick={onClick}
      className={classNames(st.Button, {}, [className, st[theme]])}
      {...restProps}
    >
      {children}
    </button>
  );
};
