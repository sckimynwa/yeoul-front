import { useState, useEffect } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState<string>('light');

    useEffect(() => {
        const localTheme = window.localStorage.getItem('THEME');
        if (localTheme) {
            setTheme(localTheme);
        }
    }, [])

    const toggleTheme = (theme: string) => {
        window.localStorage.setItem('THEME', theme);
        setTheme(theme);
    };
    return [theme, toggleTheme];
};

export default useTheme;