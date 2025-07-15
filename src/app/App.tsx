import React from "react";
import "app/styles/index.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/libs/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Главная страница</Link>
      <Link to="/about">О сайте</Link>
      <button onClick={changeTheme}>Переключить тему</button>
      <AppRouter />
    </div>
  );
};

export default App;
