import { classNames } from "shared/libs/classNames/classNames";
import st from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(st.Navbar, {}, [className])}>
      <div className={st.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          {t("Main Page")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t("About")}
        </AppLink>
      </div>
    </div>
  );
};
