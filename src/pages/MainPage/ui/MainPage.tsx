import React from "react";
import st from "./MainPage.module.scss";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();
  return <div className={st.container}>{t("Main Page")}</div>;
};

export default MainPage;