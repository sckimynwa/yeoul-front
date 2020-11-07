import { useState } from 'react';
export type ThemeType = 'light' | 'dark';

const useTheme = () => {
    const [theme, setTheme] = useState<ThemeType | string>(window.localStorage.getItem('THEME') || 'light');
    const toggleTheme = (theme: ThemeType) => {
        window.localStorage.setItem('THEME', theme);
        setTheme(theme);
    };
    return [theme, toggleTheme];
};

export default useTheme;