import React, {Suspense} from 'react';
import './styles/index.scss';
import {Routes, Route, Link} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

export const App = () => {
    const {theme, changeTheme} = useTheme();

    return (
        <div className={classNames('app', {},[theme])}>
            <Link to="/">Главная страница</Link>
            <Link to="/about">О сайте</Link>
            <button onClick={changeTheme}>Переключить тему</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync/>}/>
                    <Route path='/about' element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;