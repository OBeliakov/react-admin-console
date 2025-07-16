import { classNames } from "shared/libs/classNames/classNames";
import st from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
  theme: AppLinkTheme;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { changeTheme, theme } = useTheme();

  return (
    <Button
      onClick={changeTheme}
      className={classNames(st.ThemeSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
