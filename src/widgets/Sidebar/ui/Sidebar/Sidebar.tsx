import { classNames } from "shared/libs/classNames/classNames";
import st from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(st.Sidebar, { [st.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>
        {collapsed ? t("Increase Sidebar") : t("Decrease Sidebar")}
      </button>
      <div className={st.switchers}>
        <ThemeSwitcher theme={AppLinkTheme.SECONDARY} />
        <LangSwitcher className={st.lang} />
      </div>
    </div>
  );
};
