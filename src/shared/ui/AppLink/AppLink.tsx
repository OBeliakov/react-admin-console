import { classNames } from "shared/libs/classNames/classNames";
import st from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...restProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(st.AppLink, {}, [className, st[theme]])}
      {...restProps}
    >
      {children}
    </Link>
  );
};
