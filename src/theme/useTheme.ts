import React from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
export interface UseThemeResult {
    changeTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const  {theme, setTheme} = React.useContext(ThemeContext);

    const changeTheme = () => {
        const currentTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(currentTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
    }

    return {
        changeTheme,
        theme,
    }
}