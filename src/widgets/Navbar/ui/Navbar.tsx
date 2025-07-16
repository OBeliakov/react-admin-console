import { classNames } from "shared/libs/classNames/classNames";
import st from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(st.Navbar, {}, [className])}>
      <div className={st.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          Главная страница
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
