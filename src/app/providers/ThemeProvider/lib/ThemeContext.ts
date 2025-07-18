import React from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export type ThemeContextProps = {
    theme: Theme,
    setTheme: (theme: Theme) => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({theme: Theme.LIGHT, setTheme: () => {}});

export const LOCAL_STORAGE_THEME_KEY = 'theme';