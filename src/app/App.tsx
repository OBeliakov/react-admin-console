import React, { Suspense } from "react";
import "app/styles/index.scss";
import { Routes, Route, Link } from "react-router-dom";
import { classNames } from "shared/libs/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

export const App = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Главная страница</Link>
      <Link to="/about">О сайте</Link>
      <button onClick={changeTheme}>Переключить тему</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
