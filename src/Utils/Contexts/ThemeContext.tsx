import React, { useState, createContext } from 'react';

type ThemeType = 'light' | 'dark';
type ThemeContext = [ThemeType, () => void];

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>('light');
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        window.localStorage.setItem('THEME', newTheme);
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}