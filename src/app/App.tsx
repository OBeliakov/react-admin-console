import React from "react";
import "app/styles/index.scss";
import { classNames } from "shared/libs/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={changeTheme}>Переключить тему</button>
      <AppRouter />
    </div>
  );
};

export default App;
